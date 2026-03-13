import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const LIVRO2_PATH = join(ROOT, "..", "livro2.txt");
const OUTPUT_PATH = join(ROOT, "src", "data", "family-tree.json");
// Use a backup copy of the original data if it exists
const EXISTING_PATH = join(ROOT, "src", "data", "family-tree.json");

// --- Helpers ---

function cleanName(raw) {
  let name = raw
    .replace(/\s+/g, " ")
    .replace(/[,.:;]+$/, "")
    .replace(/\s*\|+\s*/g, "")
    .trim();
  // Remove trailing location/residence info that leaked into name
  name = name.replace(/,?\s*resid(?:e[mn]?|iam)\s+em\s+.*/i, "");
  name = name.replace(/,?\s*(?:Agricultor|Professor|Engenheiro|falecid)[aeos]*\s*.*/i, "");
  return name.trim();
}

function isValidName(name) {
  if (!name || name.length < 3) return false;
  // Must contain at least one letter
  if (!/[a-zA-ZÀ-ÿ]/.test(name)) return false;
  // Must start with a letter
  if (!/^[A-ZÀ-ÿ]/.test(name)) return false;
  // Should not be just numbers or punctuation
  if (/^\d+$/.test(name)) return false;
  // Should not be a page reference or figure caption
  if (/^(?:Fig|Cap|Page|CAPITULO|Tiveram|Filhos|Dados)/i.test(name)) return false;
  // Should not be mostly numbers/punctuation
  const letters = name.replace(/[^a-zA-ZÀ-ÿ]/g, "").length;
  if (letters < name.length * 0.5) return false;
  return true;
}

const FEM_NAMES = new Set([
  "maria", "ana", "barbara", "catarina", "susana", "margarida",
  "madalena", "angela", "rosina", "regina", "luiza", "elisabeth",
  "joana", "carolina", "amalia", "emilia", "albina", "petronila",
  "lucilda", "nilva", "dulce", "cleide", "rejane", "djenifer",
  "leticia", "larissa", "leila", "elsa", "nita", "leopoldina",
  "josefina", "iracema", "ivete", "olga", "florinda", "aurelia",
  "sara", "ema", "berta", "teresa", "tereza", "terezinha",
  "odelia", "glaci", "gabrieli", "debora", "natalia", "cleia",
  "rosamelia", "nelsi", "valeria", "jaqueline",
  "cristina", "jurema", "julia", "silvia", "sylgia", "aiglis",
  "zenaide", "irani", "noeli", "neiva", "andreia", "andrea",
  "ereni", "hagatha", "eva", "laurina", "flavia",
  "gladis", "vilma", "vera", "alice", "irene", "irmgard",
  "edith", "gertrudes", "filomena", "lourdes", "cecilia",
  "marta", "doroteia", "elvira", "lidia", "rosa", "helena",
  "ruth", "ester", "dinora", "adelia", "otilia",
  "hilda", "ingrid", "helga", "edna", "sandra", "claudia",
  "patricia", "simone", "solange", "sueli", "tania", "sonia",
  "marcia", "marlene", "marilene", "marli", "maristela",
  "rosangela", "roselaine", "rosane", "roseli", "rosenei",
  "suzana", "margaretha", "magdalena", "elisabeth", "angelica",
]);

function inferGender(name) {
  const firstName = name.split(/\s+/)[0].toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (FEM_NAMES.has(firstName)) return "F";
  if (firstName.endsWith("a") && firstName.length > 2) return "F";
  return "M";
}

function parseDate(raw) {
  if (!raw) return undefined;
  let d = raw.trim();
  d = d.replace(/^nas\.?\s*/i, "");
  // Handle 2-digit years
  if (/^\d{2}\.\d{2}\.\d{2}$/.test(d)) {
    const parts = d.split(".");
    const yy = parseInt(parts[2]);
    parts[2] = yy >= 50 ? "19" + parts[2] : yy < 30 ? "20" + parts[2] : "18" + parts[2];
    d = parts.join(".");
  }
  if (/^\d{4}$/.test(d)) return d;
  if (/^~\d{4}$/.test(d)) return d;
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(d)) return d;
  if (/^\d{2}\.\d{4}$/.test(d)) return d;
  return d.length > 0 && d.length < 15 ? d : undefined;
}

// --- Read livro2 ---

const allLines = readFileSync(LIVRO2_PATH, "utf-8").split("\n");

// --- Chapter boundaries ---
const CHAPTERS = [
  { id: "1.2", name: "Nicolau Ledur", start: 2572, end: 4061 },
  { id: "1.4", name: "Felipe Ledur", start: 4062, end: 8551 },
  { id: "1.5", name: "Miguel Ledur", start: 8552, end: 10199 },
  { id: "1.6", name: "Jose Ledur", start: 10200, end: 16246 },
  { id: "1.8", name: "Joao Ledur", start: 16247, end: 18169 },
];

const MICHAEL_CHILDREN_ABOV = {
  "1.2": "gen-6-2",
  "1.4": "gen-6-4",
  "1.5": "gen-6-5",
  "1.6": "gen-6-6",
  "1.8": "gen-6-8",
};

// --- Parse entry content ---
function parseEntryContent(text) {
  let t = text.trim();
  t = t.replace(/^\s*[-]\s*/, "");
  // Remove trailing pipe chars (OCR column artifact)
  t = t.replace(/\s*\|+\s*/g, " ").trim();

  const result = {
    name: "",
    birthDate: undefined,
    deathDate: undefined,
    spouses: [],
  };

  // Split by "/" for spouse separator (but not "//" which is OCR noise)
  const parts = t.split(/\s*(?<!\/)\/(?!\/)\s*/);

  let primary = parts[0].trim();

  // Extract "nas.DATE" or "nas DATE"
  const birthMatch = primary.match(/,?\s*nas\.?\s*([\d.~]+)/i);
  if (birthMatch) {
    result.birthDate = parseDate(birthMatch[1]);
    primary = primary.replace(birthMatch[0], "").trim();
  }

  // Extract "batizado em YYYY"
  const baptMatch = primary.match(/,?\s*batizad[oa]\s+em\s+(\d{4})/i);
  if (baptMatch) {
    result.birthDate = baptMatch[1];
    primary = primary.replace(baptMatch[0], "").trim();
  }

  // Extract death info
  const deathMatch = primary.match(/,?\s*falec(?:eu|ida|ido)\s+(?:em\s+)?([\d.]+)/i);
  if (deathMatch) {
    result.deathDate = parseDate(deathMatch[1]);
    primary = primary.replace(deathMatch[0], "").trim();
  }

  // "faleceu jovem/pequeno"
  const diedYoung = primary.match(/,?\s*falec(?:eu|ida|ido)\s+(jovem|pequen[oa]|com\s+\d+\s+\w+)/i);
  if (diedYoung) {
    primary = primary.replace(diedYoung[0], "").trim();
  }

  // Extract "casad[oa] com NAME em YYYY"
  const marriageMatch = primary.match(/,?\s*casad[oa]\s+com\s+(.+?)(?:\s+em\s+(\d{4}))?\s*$/i);
  if (marriageMatch) {
    const spName = cleanName(marriageMatch[1]);
    if (isValidName(spName)) {
      result.spouses.push({
        name: spName,
        marriageDate: marriageMatch[2],
        order: 1,
      });
    }
    primary = primary.replace(marriageMatch[0], "").trim();
  }

  result.name = cleanName(primary);

  // Parse spouse from "/" separator
  if (parts.length > 1 && result.spouses.length === 0) {
    let spouseText = parts[1].trim();
    const spouseBirthMatch = spouseText.match(/,?\s*nas\.?\s*([\d.~]+)/i);
    let spouseBirth;
    if (spouseBirthMatch) {
      spouseBirth = parseDate(spouseBirthMatch[1]);
      spouseText = spouseText.replace(spouseBirthMatch[0], "").trim();
    }
    const spouseMarriageMatch = spouseText.match(/,?\s*(?:casaram?\s+em\s+|em\s+)(\d{2}\.\d{2}\.\d{2,4}|\d{4})\s*$/i);
    let marriageDate;
    if (spouseMarriageMatch) {
      marriageDate = parseDate(spouseMarriageMatch[1]);
      spouseText = spouseText.replace(spouseMarriageMatch[0], "").trim();
    }
    const spouseName = cleanName(spouseText);
    if (isValidName(spouseName)) {
      result.spouses.push({
        name: spouseName,
        marriageDate,
        birthDate: spouseBirth,
        order: 1,
      });
    }
  }

  return result;
}

// --- Patterns ---
const ABSOLUTE_RE = /^(1\.[24568](?:\.\d+)+)\s*-\s*(.+)/;
const CHILD_LIST_RE = /^(\d{1,2})\s*-\s*(.+)/;
const RELATIVE_RE = /^(\d{1,2})\.(\d{1,2})\s*-\s*(.+)/;

function abovToId(abov) {
  return "abov-" + abov.replace(/\./g, "-");
}

// Track all extracted people and relationships
const extractedPeople = [];
const childrenMap = new Map();

// Dedup tracking: parentId+name -> person (for relative entries)
const relativeDedup = new Map();

function processChapter(chapter) {
  const chapterLines = allLines.slice(chapter.start - 1, chapter.end);
  const chapterHeadAbov = chapter.id;

  let childListDone = false;
  let lastAbsolute = null;
  const seenAbsolute = new Set();
  let overviewChildCount = 0;

  for (let i = 0; i < chapterLines.length; i++) {
    const line = chapterLines[i].trim();
    if (!line) continue;
    if (line.match(/^---\s*Page/)) continue;
    if (line.match(/^Fig\.\s/i)) continue;
    if (line.match(/^Cap\.\s/i)) continue;

    // Absolute d'Aboville entry
    const absMatch = line.match(ABSOLUTE_RE);
    if (absMatch) {
      const abov = absMatch[1];
      const content = absMatch[2];

      if (seenAbsolute.has(abov)) continue;
      seenAbsolute.add(abov);
      childListDone = true;

      const parsed = parseEntryContent(content);
      if (!isValidName(parsed.name)) continue;

      const parts = abov.split(".");
      const parentAbov = parts.slice(0, -1).join(".");
      const depth = parts.length;
      const generation = depth + 5;

      const person = {
        id: abovToId(abov),
        name: parsed.name,
        birthDate: parsed.birthDate,
        deathDate: parsed.deathDate,
        gender: inferGender(parsed.name),
        spouses: parsed.spouses,
        parentId: MICHAEL_CHILDREN_ABOV[parentAbov] || abovToId(parentAbov),
        children: [],
        generation,
        bookRef: abov,
        source: "livro2",
      };

      extractedPeople.push(person);
      if (!childrenMap.has(parentAbov)) childrenMap.set(parentAbov, []);
      childrenMap.get(parentAbov).push(abov);

      lastAbsolute = abov;
      continue;
    }

    // Relative entry (X.Y- Name) -- only after child list is done
    if (childListDone && lastAbsolute) {
      const relMatch = line.match(RELATIVE_RE);
      if (relMatch) {
        const parentNum = parseInt(relMatch[1]);
        const childNum = parseInt(relMatch[2]);
        const content = relMatch[3];

        if (parentNum > 15 || childNum > 15) continue;

        const parsed = parseEntryContent(content);
        if (!isValidName(parsed.name)) continue;

        const relAbov = `${lastAbsolute}.r${parentNum}.${childNum}`;
        if (seenAbsolute.has(relAbov)) continue;

        // Dedup: same parent + same name = duplicate from OCR double page
        const dedupKey = `${lastAbsolute}|${parsed.name}`;
        if (relativeDedup.has(dedupKey)) continue;
        relativeDedup.set(dedupKey, true);

        seenAbsolute.add(relAbov);

        const lastAbsParts = lastAbsolute.split(".");
        const generation = lastAbsParts.length + 5 + 1; // one level deeper than parent

        const person = {
          id: abovToId(relAbov),
          name: parsed.name,
          birthDate: parsed.birthDate,
          deathDate: parsed.deathDate,
          gender: inferGender(parsed.name),
          spouses: parsed.spouses,
          parentId: abovToId(lastAbsolute),
          children: [],
          generation: Math.min(generation, 14),
          bookRef: relAbov,
          source: "livro2",
        };

        extractedPeople.push(person);
        if (!childrenMap.has(lastAbsolute)) childrenMap.set(lastAbsolute, []);
        childrenMap.get(lastAbsolute).push(relAbov);
        continue;
      }
    }

    // Children overview list (before first absolute entry)
    if (!childListDone) {
      const childMatch = line.match(CHILD_LIST_RE);
      if (childMatch) {
        const childNum = parseInt(childMatch[1]);
        const content = childMatch[2];

        // Sanity: child numbers should be roughly sequential
        if (childNum > 20) continue;
        if (childNum <= overviewChildCount - 2) continue; // Out of sequence = OCR noise

        overviewChildCount = childNum;

        const parsed = parseEntryContent(content);
        if (!isValidName(parsed.name)) continue;

        const abov = `${chapterHeadAbov}.${childNum}`;
        if (seenAbsolute.has(abov)) continue;
        seenAbsolute.add(abov);

        const person = {
          id: abovToId(abov),
          name: parsed.name,
          birthDate: parsed.birthDate,
          deathDate: parsed.deathDate,
          gender: inferGender(parsed.name),
          spouses: parsed.spouses,
          parentId: MICHAEL_CHILDREN_ABOV[chapterHeadAbov],
          children: [],
          generation: 8,
          bookRef: abov,
          source: "livro2",
        };

        extractedPeople.push(person);
        if (!childrenMap.has(chapterHeadAbov)) childrenMap.set(chapterHeadAbov, []);
        childrenMap.get(chapterHeadAbov).push(abov);
      }
    }
  }
}

for (const chapter of CHAPTERS) {
  console.log(`Processing ${chapter.name} (lines ${chapter.start}-${chapter.end})...`);
  processChapter(chapter);
}

console.log(`\nExtracted ${extractedPeople.length} people from livro2.`);

// Wire up children arrays
for (const person of extractedPeople) {
  const abov = person.bookRef;
  const childAbovs = childrenMap.get(abov) || [];
  person.children = childAbovs.map(abovToId);
}

// Deduplicate by ID (keep most complete)
const byId = new Map();
for (const p of extractedPeople) {
  const existing = byId.get(p.id);
  if (existing) {
    const score = (person) =>
      (person.birthDate ? 1 : 0) +
      (person.deathDate ? 1 : 0) +
      (person.spouses.length ? 1 : 0) +
      (person.children.length ? 1 : 0);
    if (score(p) > score(existing)) byId.set(p.id, p);
  } else {
    byId.set(p.id, p);
  }
}

const dedupedPeople = Array.from(byId.values());
console.log(`After deduplication: ${dedupedPeople.length} people.`);

// --- Load existing livro1 data ---

const existingData = JSON.parse(readFileSync(EXISTING_PATH, "utf-8"));
const livro1People = existingData.filter(
  (p) => p.source === "livro1" || p.source === "both" || p.id.startsWith("gen-6-")
);

console.log(`Keeping ${livro1People.length} existing people from livro1.`);

// --- Fix Michael's children ---

function fixChild(id, data) {
  const entry = livro1People.find((p) => p.id === id);
  if (!entry) return;
  const ch = childrenMap.get(data.abov) || [];
  Object.assign(entry, data.fields);
  entry.children = ch.map(abovToId);
  entry.source = "livro2";
}

fixChild("gen-6-2", {
  abov: "1.2",
  fields: {
    name: "Nicolau Ledur",
    birthDate: "1825",
    birthPlace: "Saarland, Alemanha",
    deathDate: "05.03.1876",
    deathPlace: "Bom Principio, RS",
    spouses: [{ name: "Magdalena Goergen", marriageDate: "1845", marriagePlace: "Capela Santana, RS", deathDate: "1909", order: 1 }],
  },
});

fixChild("gen-6-4", {
  abov: "1.4",
  fields: {
    name: "Felipe Ledur",
    birthDate: "12.04.1829",
    birthPlace: "Sao Leopoldo, RS",
    deathDate: "14.01.1915",
    deathPlace: "Bom Principio, RS",
    spouses: [{ name: "Susana Rauber", marriageDate: "1852", birthDate: "17.01.1833", deathDate: "21.07.1917", order: 1 }],
  },
});

fixChild("gen-6-5", {
  abov: "1.5",
  fields: {
    name: "Miguel Ledur",
    birthDate: "06.01.1832",
    birthPlace: "Rio Grande do Sul, Brasil",
    spouses: [{ name: "Rosina Ott", marriageDate: "14.05.1856", marriagePlace: "Sao Sebastiao do Cai, RS", order: 1 }],
  },
});

fixChild("gen-6-6", {
  abov: "1.6",
  fields: {
    name: "Jose Ledur",
    birthDate: "01.1833",
    birthPlace: "Rio Grande do Sul, Brasil",
    deathDate: "21.10.1884",
    deathPlace: "Nova Palmira, RS",
    spouses: [{ name: "Anna Maria Machrry", marriagePlace: "Bom Principio, RS", birthDate: "11.12.1841", deathDate: "12.06.1913", order: 1 }],
  },
});

// Fix gen-6-8 to Joao Ledur
const joaoEntry = livro1People.find((p) => p.id === "gen-6-8");
if (joaoEntry) {
  const joaoChildren = childrenMap.get("1.8") || [];
  joaoEntry.name = "Joao Ledur";
  joaoEntry.birthDate = "14.05.1837";
  joaoEntry.birthPlace = "Bom Principio, RS";
  joaoEntry.deathDate = "10.12.1903";
  joaoEntry.children = joaoChildren.map(abovToId);
  joaoEntry.spouses = [{ name: "Maria Henz", marriageDate: "13.07.1858", order: 1 }];
  joaoEntry.bookRef = "1.8";
  joaoEntry.source = "livro2";
}

// Remove old gen-7-* placeholders and gen-6-7
const removeIds = new Set();
for (const p of livro1People) {
  if (p.id.startsWith("gen-7-")) removeIds.add(p.id);
}
removeIds.add("gen-6-7");

const cleanedLivro1 = livro1People.filter((p) => !removeIds.has(p.id));

// Fix Michael's children array
const michaelEntry = cleanedLivro1.find((p) => p.id === "gen-5-7");
if (michaelEntry) {
  michaelEntry.children = ["gen-6-1", "gen-6-2", "gen-6-3", "gen-6-4", "gen-6-5", "gen-6-6", "gen-6-8"];
  michaelEntry.deathDate = "13.08.1881";
  michaelEntry.deathPlace = "Bom Principio, RS";
}

// --- Merge ---

const allPeople = [...cleanedLivro1, ...dedupedPeople];

// Validate references
const allIds = new Set(allPeople.map((p) => p.id));
let orphans = 0;
for (const p of allPeople) {
  if (p.parentId && !allIds.has(p.parentId)) {
    orphans++;
    // Try to find a plausible parent from the bookRef
    p.parentId = undefined;
  }
  p.children = p.children.filter((cid) => allIds.has(cid));
}

// Generation stats
const gens = {};
allPeople.forEach((p) => { gens[p.generation] = (gens[p.generation] || 0) + 1; });

console.log(`\nTotal people: ${allPeople.length}`);
console.log(`Orphans fixed: ${orphans}`);
console.log("By generation:", gens);

writeFileSync(OUTPUT_PATH, JSON.stringify(allPeople, null, 2));
console.log(`Written to ${OUTPUT_PATH}`);
