import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    printSchema,
    GraphQLList, } from 'graphql';

import Room from './types/room'

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        roomGetList: {
            type: new GraphQLList(new GraphQLNonNull(Room)),
            resolve: async (source, args, { pgPool }) => {
                const pgResp = await pgPool.query(`
                SELECT id, price, ammenities, available, 
                created_at AS "createdAt"
                FROM hotel-assignment2.room
                ORDER BY created_at DESC
                LIMIT 100
              `);
                return pgResp.rows;
            },
        },
    },
});

export const schema = new GraphQLSchema({
    query: QueryType,
});