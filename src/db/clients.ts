import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

export const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 })
export const queryClient = postgres(process.env.DATABASE_URL!)

const db = drizzle(migrationClient)

await migrate(db, { migrationsFolder: 'src/db/migrations' })