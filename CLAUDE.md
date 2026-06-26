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
- **Browser hooks: always use `usehooks-ts` instead of raw browser APIs — covers `useInterval` (replaces `setInterval`), `useTimeout` (replaces `setTimeout`), `useEventListener`, `useMediaQuery`, `useLocalStorage`, `useSessionStorage`, and more. Only drop to raw APIs when no `usehooks-ts` hook covers the use case**
- **Styling: always use CSS Modules (`.module.css`) — never plain `.css` files or inline style properties**
- **Dynamic styles: use CSS custom properties via `style={{ '--var': value } as React.CSSProperties}` and reference them in the module with `var(--var)` — never set `color`, `background`, `padding`, etc. directly via `style`**

## Folder structure

```
src/
  components/
    ComponentName/
      ComponentName.tsx        # component implementation
      ComponentName.module.css # scoped styles
      ComponentName.test.tsx   # component tests
  hooks/        # custom hooks
  types/        # shared TypeScript types
  data/         # mock data (used when no API is available)
  utils/        # pure helper functions
```

- **Every component lives in its own folder** — `ComponentName/ComponentName.tsx` with a co-located `ComponentName.module.css` and `ComponentName.test.tsx`
- **No barrel `index.ts` files** — import directly from the file: `@/components/ComponentName/ComponentName`

## Data fetching

- If an API endpoint is available, fetch with TanStack Query (`useQuery`)
- If no endpoint is available, hardcode mock data in `src/data/` and swap later
- API responses follow this shape: `{ data: T[], total: number, page: number, pageSize: number, totalPages: number }`

## Agents

- After scaffolding, run the `code-quality-reviewer` agent to catch DRY violations and logic that should live in a custom hook
