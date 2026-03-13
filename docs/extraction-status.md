# Family Tree Data Extraction - Status

## Goal

Extract all ~2000+ people from the two source books (livro1.txt and livro2.txt) into `src/data/family-tree.json`.

## Current State: IN PROGRESS (needs review)

The extraction script (`scripts/extract-tree.mjs`) runs and produces output, but the data has quality issues that need fixing before it should be considered done.

### What exists now

- **Script**: `scripts/extract-tree.mjs` - Node.js parser that reads livro2.txt and merges with existing livro1 European ancestors
- **Analysis script**: `scripts/analyze.mjs` - prints stats about the extracted data
- **Output**: `src/data/family-tree.json` currently has **4,856 people** (last run)

### What works

1. Livro1 European ancestors (generations 1-5, ~24 people) are preserved from the original hand-curated data
2. Michael Ledur's children (generation 6) are correctly linked with updated data from livro2
3. Absolute d'Aboville entries (e.g., `1.4.5.2.1- Name`) are parsed correctly (~1,447 entries)
4. Chapter children overview lists are parsed (generation 8, ~55 entries)
5. Relative numbered entries (e.g., `2.1- Name`) are parsed (~3,820 entries)
6. Spouse names, birth dates, death dates, and marriage dates are extracted
7. Gender is inferred from first name

### Known Issues

1. **OCR double-page duplicates**: Each physical page in livro2.txt appears twice (left column scan + right column scan). Deduplication catches many but not all. Some truncated names like "Mar", "Jos", "Ros" appear as separate people.

2. **8 orphan entries**: Some people have `parentId` references to entries that don't exist (their parent was filtered out or not parsed). These get `parentId: undefined` as a fallback.

3. **Truncated names from OCR**: Names like "Rubem Bor", "Lizete Izabel Lec", "Ana Tais Le:" are cut off by column scanning. The `isValidName()` filter catches very short ones (<3 chars) but not these medium-length truncations.

4. **Generation distribution is flat**: 3,820 out of 4,856 people are assigned generation 11. This is because all relative entries get `parentGeneration + 1`, but many relative entries are actually nested 2-3 levels deep under their absolute parent. The relative numbering stack is not tracked.

5. **Relative entry nesting not tracked**: Entries like `1.1- Child` followed by `1.1- Grandchild` reuse the same `X.Y-` pattern at different depths. The current parser assigns all relative entries as direct children of the last absolute entry, losing the multi-level nesting.

6. **Some false roots**: 8 people show up as roots (no parentId) besides Joachim Harter. These are entries whose parent absolute entry was not parsed correctly.

7. **page.tsx not updated**: The homepage still says "mais de 2000 pessoas" - needs updating to reflect actual count.

8. **Build not verified**: `npx next build` has not been run to confirm the data works with the tree renderer.

### What needs to happen next

1. **Fix relative entry depth tracking**: Implement a stack-based parser that tracks the current nesting level of `X.Y-` entries. When `1.1-` appears under another `1.1-`, it should be a grandchild, not a sibling.

2. **Better OCR dedup**: Compare content between page blocks (lines between `--- Page N ---` markers) to identify and skip the right-column duplicate scans.

3. **Clean truncated names**: Either filter entries with names that end in `:` or incomplete words, or try to reconstruct them from the duplicate page scan.

4. **Fix orphan entries**: Trace back their bookRef to find the correct parent.

5. **Update page.tsx**: Change the person count to match the actual extracted total.

6. **Run build**: `npx next build` to verify everything works.

7. **Manual spot-check**: Compare a few family branches against the source books to verify accuracy.

## How to run

```bash
# Extract data (overwrites family-tree.json)
node scripts/extract-tree.mjs

# Analyze the output
node scripts/analyze.mjs

# Build to verify
npm run build
```

## File inventory

| File | Purpose |
|------|---------|
| `scripts/extract-tree.mjs` | Main extraction script |
| `scripts/analyze.mjs` | Data quality analysis |
| `src/data/family-tree.json` | Output (4,856 people, needs cleanup) |
| `../livro1.txt` | Source: European ancestors (9,986 lines) |
| `../livro2.txt` | Source: Brazilian descendants (19,287 lines) |

## Chapter boundaries in livro2.txt

| Chapter | Person | Lines | d'Aboville |
|---------|--------|-------|------------|
| III | Nicolau Ledur | 2572-4061 | 1.2 |
| IV | Felipe Ledur | 4062-8551 | 1.4 |
| V | Miguel Ledur | 8552-10199 | 1.5 |
| VI | Jose Ledur | 10200-16246 | 1.6 |
| VII | Joao Ledur | 16247-18169 | 1.8 |
