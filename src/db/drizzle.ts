import type { Config } from "drizzle-kit"

export default {
  schema: "/src/models",
  out: "/src/db/migrations",
  breakpoints: true,
} satisfies Config