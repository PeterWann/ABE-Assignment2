import {
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
} from 'graphql';

const InputReservation = new GraphQLInputObjectType({
    name: 'InputReservation',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        date_to: { type: new GraphQLNonNull(GraphQLString) },
        date_from: { type: new GraphQLNonNull(GraphQLString) },
        room_id: { type: new GraphQLNonNull(GraphQLInt) }
    },
});

export default InputReservation;