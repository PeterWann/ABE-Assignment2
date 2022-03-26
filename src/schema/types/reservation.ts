import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLFloat,
    GraphQLBoolean,
} from 'graphql';

import Room from './room';

const Reservation = new GraphQLObjectType({
    name: 'Reservation',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        from: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ from }) => from.toIsoString(),
        },
        to: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ to }) => to.toISOString(),
        },
        room: {
            type: new GraphQLNonNull(Room),
        }
    },
});

export default Reservation;