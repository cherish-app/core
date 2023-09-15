import { pgEnum, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";
import { kinships } from "./kinship";

export const relatives = pgTable('relatives', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  kinshipId: serial('kinship_id').notNull().references(() => kinships.id)
})