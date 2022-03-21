import pg from 'pg';

import { postreqConnectionString } from '../config';

export default async function pgClient() {
    const pgPool = new pg.Pool({
        connectionString: postreqConnectionString,
        database: 'hotel-assignment2',
    });

try {
    const client = await pgPool.connect();
    const tableCountResp = await client.query(
        'select count(*) from information_schema.tables where table_schema = $1;',
        ['hotel-assigment2']
    );
    client.release();

    console.log(
        'Connected to PostreqSQL | Tables count:',
        tableCountResp.rows[0].count
    );
} catch (e: any) {
    console.log(e.message);

    const client = await pgPool.connect();
    const db = await client.query(
        'CREATE DATABASE hotel-assignment-2;'
    )
    client.release();
}

pgPool.on('error', (err) => {
    console.error('Unexpected PG client error', err);
    process.exit(-1);
});

return {
    pgPool,
    pgClose: async () => await pgPool.end(),
};
}