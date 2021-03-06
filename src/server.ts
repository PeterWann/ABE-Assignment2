import { graphqlHTTP } from "express-graphql";
import { schema } from './schema'
import express from "express";
import cors from 'cors';
import * as config from './config';
import pgClient from './database/pg-client';

async function main() {
    const pgPool = await pgClient();
    const server = express();
    server.use(cors());
    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());

    server.use(
        '/graphql',
        graphqlHTTP({
            schema,
            context: pgPool,
            graphiql: true,
        })
    );

    server.listen(config.port, () => {
        console.log(`Server URL: http://localhost:${config.port}/`);
    })
}

main();
