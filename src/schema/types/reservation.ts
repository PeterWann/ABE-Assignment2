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
        date_from: { type: new GraphQLNonNull(GraphQLString) },
        date_to: { type: new GraphQLNonNull(GraphQLString) },
        room_id: { type: new GraphQLNonNull(Room),
            resolve: async (obj, args, context) => {
                return await context.loaders.getRoom.load(obj.room_id);
            }
        }
    },
});

export default Reservation;