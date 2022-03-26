import {
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
} from 'graphql';

import InputRoom from './input-room';

const InputReservation = new GraphQLInputObjectType({
    name: 'InputReservation',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        dateTo: { type: new GraphQLNonNull(GraphQLString) },
        dateFrom: { type: new GraphQLNonNull(GraphQLString) },
        room: { type: new GraphQLNonNull(InputRoom) }
    },
});

export default InputReservation;