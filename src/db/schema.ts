import { 
    pgTable, 
    serial, 
    varchar, 
    boolean, 
    timestamp, 
    integer, 
    text 
} from "drizzle-orm/pg-core"

import { relations } from "drizzle-orm"

export const customers = pgTable('customers', {
    id: serial('id').primaryKey(),
    firstName: varchar('first_name').notNull(),
    lastName: varchar('last_name').notNull(),
    email: varchar('email').notNull().unique(),
    phone: varchar('phone').unique().notNull(),
    address1: varchar('address1').notNull(),
    address2: varchar('address2'),
    city: varchar('city').notNull(),
    state: varchar("state", { length: 2}).notNull(),
    zip: varchar("zip", {length: 10}).notNull(),
    notes: text('notes'),
    active: boolean('active').notNull().default(true),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
})

export const tickets = pgTable('tickets', {
    id: serial('id').primaryKey(),
    customerId: integer('customer_id').notNull().references(() => customers.id),
    title: varchar('title').notNull(),
    description: text('description'),
    completed: boolean('completed').notNull().default(false),
    tech: varchar('tech').notNull().default('unassigned'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
})

// Create relationship 
/**
 * One customer => many tickets
 * One tickets => One customer
 * 
 */

export const customersRelations = relations(customers,
   ({ many }) => ({
        tickets: many(tickets)
   })
)

export const ticketsRelations = relations(tickets, 
    ({ one }) => ({
        customers: one(customers, {
            fields: [tickets.customerId],
            references: [customers.id]
        })
    })
)

/**
 * in de parameters gaat het niet om meedere customers of 1 tickets aan duiden, slechts om de helper functie te gebruiken
 * dus elke customer meerdere tickets
 * elk ticket -> 1 customer
 * 
 */