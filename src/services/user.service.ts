import { drizzle } from 'drizzle-orm/postgres-js'
import * as user from '../models/user'
import { queryClient } from '../db/clients'
import { eq, sql } from 'drizzle-orm'
import { randomUUID } from 'crypto'

const db = drizzle(queryClient, { schema: {
  ...user
  }
})

export type User = typeof user.users.$inferInsert

export const findAll = async () => {
  return await db.query.users.findMany()
}

export const findById = async (id: number) => {
  return await db
  .select()
  .from(user.users)
  .where(sql`${user.users.id} = ${id}`)
}

export const findByEmail = async (email: string) => {
  return await db
  .select()
  .from(user.users)
  .where(sql`${user.users.email} = ${email}`)
}

export const create = async (newUser: User) => {
  newUser.id = randomUUID()
  newUser.roleId = 1
  return await db.insert(user.users).values(newUser).returning()
}