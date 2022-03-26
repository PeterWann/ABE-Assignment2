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
        date_to: { type: new GraphQLNonNull(GraphQLString) },
        date_from: { type: new GraphQLNonNull(GraphQLString) },
        room_id: { type: new GraphQLNonNull(InputRoom) }
    },
});

export default InputReservation;