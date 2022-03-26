import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} from 'graphql';

import Room from './room';

const Reservation = new GraphQLObjectType({
    name: 'Reservation',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        dateFrom: { type: new GraphQLNonNull(GraphQLString) },
        datoTo: { type: new GraphQLNonNull(GraphQLString) },
        room: { type: new GraphQLNonNull(Room)}
    },
});

export default Reservation;