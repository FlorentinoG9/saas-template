import { sql } from 'drizzle-orm'
import { pgSchema, pgTable, text, uuid } from 'drizzle-orm/pg-core'

const auth = pgSchema('auth')

export const users = auth.table('users', (t) => ({
  id: t.uuid('id').primaryKey().default(sql`gen_random_uuid()`),
}))

export const tenants = pgTable('tenants', {
  id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
  name: text('name'),
})

export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
  name: text('name'),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  sb_user: uuid('sb_user').references(() => users.id),
})
