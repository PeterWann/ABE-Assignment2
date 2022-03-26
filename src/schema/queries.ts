import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    printSchema,
    GraphQLList, } from 'graphql';

import Room from './types/room'
import Reservation from './types/reservation'

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        roomGetList: {
            type: new GraphQLList(new GraphQLNonNull(Room)),
            resolve: async (source, args, { pgPool }) => {
                return await pgPool.roomList();
            },
        },
        reservationGetList: {
            type: new GraphQLList(new GraphQLNonNull(Reservation)),
            resolve: async (source, args, { pgPool }) => {
                return await pgPool.reservationList();
            },
        }
    },
});

export default QueryType;