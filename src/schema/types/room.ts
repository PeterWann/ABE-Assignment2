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

const Room = new GraphQLObjectType({
    name: 'Room',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        ammenities: {
            type: new GraphQLNonNull(
                new GraphQLList(new GraphQLNonNull(GraphQLString))
            ),
        },
        available: { type: new GraphQLNonNull(GraphQLBoolean) },
        createdAt: { type: new GraphQLNonNull(GraphQLString) ,
            resolve: (source) => source.createdAt.toISOString(),
        }
    },
});

export default Room;