# CLAUDE.md

## Stack

- Vite + React + TypeScript
- TanStack Query v5 — all data fetching
- TanStack Table v8 — all tables (filtering, sorting, pagination)
- Zod — all form and data validation

## Conventions

- One component per file — never co-locate multiple components in the same file
- Complex logic belongs in a custom hook, not inline in a component — extract to `/src/hooks/`
- No code repetition — if something appears more than once, extract it into a reusable helper, component, or custom hook
- Path alias: import from `src/` as `@/`
- **Styling: always use CSS Modules (`.module.css`) — never plain `.css` files or inline style properties**
- **Dynamic styles: use CSS custom properties via `style={{ '--var': value } as React.CSSProperties}` and reference them in the module with `var(--var)` — never set `color`, `background`, `padding`, etc. directly via `style`**

## Folder structure

```
src/
  components/   # UI components, one per file
  hooks/        # custom hooks
  types/        # shared TypeScript types
  data/         # mock data (used when no API is available)
  utils/        # pure helper functions
```

## Data fetching

- If an API endpoint is available, fetch with TanStack Query (`useQuery`)
- If no endpoint is available, hardcode mock data in `src/data/` and swap later
- API responses follow this shape: `{ data: T[], total: number, page: number, pageSize: number, totalPages: number }`

## Agents

- After scaffolding, run the `code-quality-reviewer` agent to catch DRY violations and logic that should live in a custom hook
