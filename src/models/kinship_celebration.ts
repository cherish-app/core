import { pgTable, serial } from "drizzle-orm/pg-core";
import { celebrations } from "./celebration";
import { kinships } from "./kinship";

export const kinshipCelebration = pgTable('kinship_celebration', {
  kinshipId: serial('kinship_id').references(() => kinships.id),
  celebrationId: serial('celebration_id').references(() => celebrations.id)
})