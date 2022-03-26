import { GraphQLObjectType, GraphQLNonNull } from "graphql";
import Room from "./types/room";
import InputRoom from "./types/input-room";
import Reservation from "./types/reservation";
import InputReservation from "./types/input-reservation";

const MutationType = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        roomCreate: {
            type: new GraphQLNonNull(Room),
            args: {
                room: { type: new GraphQLNonNull(InputRoom) },
            },
            resolve: async (source, { room }, { mutators }) => {
                console.log(room)
                return await mutators.roomCreate(room);
            },
        },
        reservationCreate: {
            type: new GraphQLNonNull(Reservation),
            args: {
                reservation: { type: new GraphQLNonNull(InputReservation) },
            },
            resolve: async (source, { reservation }, { mutators }) => {
                console.log(reservation)
                return await mutators.reservationCreate(reservation);
            },
        }
    }),
});

export default MutationType;