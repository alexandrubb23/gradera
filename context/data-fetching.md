## Data fetching

- If an API endpoint is available, fetch with TanStack Query (`useQuery`)
- If no endpoint is available, hardcode mock data in `src/data/` and swap later
- API responses follow this shape: `{ data: T[], total: number, page: number, pageSize: number, totalPages: number }`
