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
        roomnumber: { type: new GraphQLNonNull(GraphQLInt)},
        fridge: { type: new GraphQLNonNull(GraphQLBoolean)},
        aircondition: { type: new GraphQLNonNull(GraphQLBoolean)},
        television: { type: new GraphQLNonNull(GraphQLBoolean)},
        roomservice: { type: new GraphQLNonNull(GraphQLBoolean)},
        available: { type: new GraphQLNonNull(GraphQLBoolean) },
        createdAt: { type: new GraphQLNonNull(GraphQLString) ,
            resolve: (source) => source.createdAt.toISOString(),
        }
    },
});

export default Room;