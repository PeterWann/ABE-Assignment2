import { graphqlHTTP } from "express-graphql";
import { schema } from './schema'
import express from "express";
import cors from 'cors';
import * as config from './config';
import pgClient from './database/pg-client';
import { pgApiWrapper } from './database/pg-api';
import DataLoader from "dataloader";




async function main() {
    const pgPool = await pgClient();
    const server = express();
    server.use(cors());
    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());
    const pgApi = await pgApiWrapper();
    const queries =  {
        ...pgApi.queries
    }
    const mutators = {
        ...pgApi.mutators
    }
    const loaders = {
        getRoom: new DataLoader((roomId: readonly number[]) => {
            console.log(roomId);
            return pgApi.queries.getRoomById(roomId)
        }),
    };

    server.use(
        '/graphql',
        graphqlHTTP({
            schema,
            context: { pgPool, queries, mutators, loaders },
            graphiql: true,
        })
    );

    server.listen(config.port, () => {
        console.log(`Server URL: http://localhost:${config.port}/`);
    })
}

main();
