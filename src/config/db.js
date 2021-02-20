const poolSize = 50
const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'medium_data',
    port: 5432,
    max: poolSize + 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})


async function getClient() {
    try {
        const client = await pool.connect();
        return client;
    }
    catch(err) {
        console.log('error in db connection ', err);
    }
}


exports = module.exports = {
    getClient
}
