import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const idea = pgTable('idea', {
    id: serial('id').primaryKey(),
    content: varchar('content', { length: 255 }).notNull(),
    username: varchar('username', { length: 255 }).notNull(),
    vote: integer('vote').default(0),
    createdAt: varchar('createdAt', { length: 255 }).notNull()
});
