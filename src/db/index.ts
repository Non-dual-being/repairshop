import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { config } from "dotenv"

config({ path: ".env.local"})

const sql = neon(process.env.DATABASE_URL!) /** ts is needs to have the ! syntax to indicate its in het env */

const db = drizzle(sql)

export { db }

/**
 * logger 
 * 
 * const db = drizzle(sql, {logger: true})
 */

