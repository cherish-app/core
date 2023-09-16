import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

export const kinships = pgTable('kinships', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
})