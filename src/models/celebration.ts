import { date, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

export const celebrations = pgTable('celebrations', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  date: date('date').notNull()
})