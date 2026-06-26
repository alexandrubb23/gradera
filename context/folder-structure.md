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
