## Sessions

### 2026-06-26 — CLAUDE.md context split

**What was done:**

- Extracted the five sections from the monolithic `CLAUDE.md` into separate focused files under `context/`:
  - `context/stack.md` — Vite + React + TypeScript, TanStack Query v5, TanStack Table v8, Zod
  - `context/conventions.md` — component-per-file, custom hooks, CSS Modules, `usehooks-ts`, dynamic styles via CSS custom properties
  - `context/folder-structure.md` — `ComponentName/ComponentName.tsx` pattern, no barrel `index.ts` files
  - `context/data-fetching.md` — TanStack Query `useQuery`, mock data in `src/data/`, API response shape
  - `context/agents.md` — run `code-quality-reviewer` after scaffolding
- Replaced `CLAUDE.md` body with `@context/*.md` import directives (Claude Code's supported import syntax)
- Added a `## Context Files` heading with a description line before the imports for clarity

**Why:** Splitting a monolithic instruction file into focused context files makes each section easier to find and edit independently. The `@import` pattern is fully supported by Claude Code — all files still load into context at launch.

**Suggested branch name:** `chore/claude-md-context-split`
