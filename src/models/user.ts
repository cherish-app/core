import { pgEnum, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum('role_enum', ['USER', 'ADMIN'])

export const roles = pgTable('roles', {
  id: serial('id').primaryKey(),
  name: roleEnum('name').notNull().unique()
})

export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  roleId: serial('role_id').notNull().references(() => roles.id)
})