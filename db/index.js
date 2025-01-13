import { truncateSync } from 'fs'
import knex from 'knex'
import { fileURLToPath } from 'url'

/**
 * TODO: Follow the steps required to connect to the database using knex
 * Make sure your default export is a const called db
 */

const path = new URL('./db.sqlite', import.meta.url)
const db = knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename: fileURLToPath(path) }
})

export default db