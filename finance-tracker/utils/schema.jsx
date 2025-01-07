import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Budgets=pgTable('budgets',{
    id:serial('id').primaryKey(),
    name:varchr('name').notNull(),
    amount:varchar('amount').notNull(),
    icon: varchar('icon'),
    createdBy:varchar('createdBy').notNull()
})