import { date, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const celebrations = pgTable('celebrations', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  date: date('date').notNull()
})