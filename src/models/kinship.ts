import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const kinships = pgTable('kinships', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
})