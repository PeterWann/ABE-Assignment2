import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import RoomError from './RoomError';

const RoomPayload = new GraphQLObjectType({
    name: 'RoomPayload',
    fields: () => ({
        errors: {
            type: new GraphQLNonNull(
                new GraphQLList(new GraphQLNonNull(RoomError)),
            ),
        },
        id: { type: GraphQLInt },
        roomnumber: { type: GraphQLInt },
    }),
});

export default RoomPayload;