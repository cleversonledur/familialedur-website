# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Genealogical and historical website for the Ledur family (Familia Ledur), documenting their origins in Lorena (France/Germany border, 1659) through settlement in Rio Grande do Sul, Brazil. All content is in Brazilian Portuguese (pt-BR).

## Tech Stack

- **Next.js 16** with App Router, static export (`output: "export"`)
- **React 19**, **TypeScript 5** (strict mode)
- **Tailwind CSS v4** with custom CSS variables (earthy palette: brown, green, gold)
- **D3.js 7** for interactive family tree visualization
- **Fonts**: Merriweather (serif, headings) + Inter (sans, body) via `next/font`

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build (static export to /out)
npm run start    # Serve production build
npm run lint     # ESLint
```

## Architecture

### Rendering Strategy

Server components by default. Client components (`"use client"`) only where interactivity is needed (tree, timeline, mobile menu). Heavy client components use `next/dynamic` for code-splitting.

### Route Structure

- `/` — Home with hero, timeline preview, quick links
- `/arvore` — Interactive D3-based family tree (fully client-rendered)
- `/historia/[origens|viagem|colonizacao|cultura]` — Historical narrative pages
- `/sobrenomes` — 150+ connected surnames
- `/cidadania-alema` — German citizenship information
- `/locais` — Geographic locations
- `/sobre` — About page

### Data Layer

No API or database. All data lives in `src/data/` as typed JSON files:

- `family-tree.json` — 2000+ people across 7 generations (root: Joachim Harter, 1659)
- `timeline-events.json` — Historical events with categories (europe, migration, brazil, family)
- `surnames.json` — 150+ surnames with origin, meaning, connection
- `places.json` — Geographic locations with lat/lng coordinates

TypeScript interfaces for all data in `src/lib/types.ts`.

### Key Modules

- `src/lib/tree-utils.ts` — Tree building, traversal, search, viewport optimization. Handles multiple date formats (DD.MM.YYYY, ISO 8601, ~year approximations).
- `src/components/FamilyTree.tsx` + `PersonNode.tsx` — D3 + SVG tree with zoom, search, expand/collapse. Viewport-based rendering for performance with 2000+ nodes.
- `src/components/Timeline.tsx` — IntersectionObserver-driven scroll animations with category filtering.

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

## Conventions

- Component files: PascalCase, default exports, props interface defined above component
- Styling: Tailwind utility classes; custom color variables defined in `globals.css`
- No global state management — local `useState`/`useRef` only
- Semantic HTML with ARIA labels on interactive elements
- Date formats in data: DD.MM.YYYY, ISO 8601, or ~year for approximations
