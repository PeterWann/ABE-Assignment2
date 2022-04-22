import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} from 'graphql';

const RoomError = new GraphQLObjectType({
    name: 'RoomError',
    fields: () => ({
        message: {
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

export default RoomError;   