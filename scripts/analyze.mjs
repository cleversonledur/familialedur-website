import { readFileSync } from "fs";

const d = JSON.parse(readFileSync("src/data/family-tree.json", "utf-8"));
console.log("Total:", d.length);

const noParent = d.filter((p) => !p.parentId);
console.log("Roots:", noParent.map((p) => p.name));

const gens = {};
d.forEach((p) => { gens[p.generation] = (gens[p.generation] || 0) + 1; });
console.log("By generation:", gens);

const noName = d.filter((p) => !p.name || p.name.length < 3);
console.log("Short names:", noName.length);
if (noName.length > 0) {
  console.log("Examples:", noName.slice(0, 5).map((p) => ({ id: p.id, name: p.name, bookRef: p.bookRef })));
}

const dups = new Map();
d.forEach((p) => {
  const k = p.name + "|" + (p.birthDate || "");
  dups.set(k, (dups.get(k) || 0) + 1);
});
const realDups = [...dups.entries()].filter(([, v]) => v > 1).sort((a, b) => b[1] - a[1]);
console.log("Top duplicates:", realDups.slice(0, 15));

// Sample some entries
console.log("\nSample entries:");
const samples = [d[30], d[50], d[100], d[500], d[1000], d[2000], d[3000]].filter(Boolean);
for (const s of samples) {
  console.log(`  ${s.id}: ${s.name} (${s.birthDate || "?"}) gen=${s.generation} parent=${s.parentId} children=${s.children.length}`);
}
