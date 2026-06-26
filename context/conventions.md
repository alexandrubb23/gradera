## Conventions

- One component per file — never co-locate multiple components in the same file
- Complex logic belongs in a custom hook, not inline in a component — extract to `/src/hooks/`
- No code repetition — if something appears more than once, extract it into a reusable helper, component, or custom hook
- Path alias: import from `src/` as `@/`
- **Browser hooks: always use `usehooks-ts` instead of raw browser APIs — covers `useInterval` (replaces `setInterval`), `useTimeout` (replaces `setTimeout`), `useEventListener`, `useMediaQuery`, `useLocalStorage`, `useSessionStorage`, and more. Only drop to raw APIs when no `usehooks-ts` hook covers the use case**
- **Styling: always use CSS Modules (`.module.css`) — never plain `.css` files or inline style properties**
- **Dynamic styles: use CSS custom properties via `style={{ '--var': value } as React.CSSProperties}` and reference them in the module with `var(--var)` — never set `color`, `background`, `padding`, etc. directly via `style`**
