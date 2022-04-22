import { GraphQLInt } from 'graphql';
import Reservation from '../schema/types/reservation';
import RoomPayload from '../schema/types/RoomPayload';
import pgClient from './pg-client';

export const pgApiWrapper = async () => {
    const { pgPool } = await pgClient();
    const pgQuery = (text: string, params = {}) =>
        pgPool.query(text, Object.values(params));
    return {
        queries: {
            roomList: async () => {
                const res = await pgQuery(`SELECT * FROM rooms`);
                return res.rows;
            },
            reservationList: async () => {
                const res = await pgQuery(`SELECT * FROM Reservations`);
                return res.rows;
            },
            getRoomById: async (room_id: any) => {
                const res = await pgQuery(`SELECT * FROM rooms WHERE id = ${room_id}`);
                return res.rows;
            }
        },
        mutators: {
            roomCreate: async (Room: any) => {
                console.log("line 27")
                const payload = { errors: [], id: GraphQLInt, roomnumber: GraphQLInt };
                
                const pgResp = await pgQuery(`INSERT INTO rooms (id, price, roomnumber, fridge, 
                    aircondition, television, roomservice, available, created_at)
            VALUES (
                $1,
                '${Room.price}',
                $2,
                '${Room.fridge}',
                '${Room.aircondition}',
                '${Room.television}',
                '${Room.roomservice}',
                '${Room.available}',
                '${Room.created_at}'
            )
            RETURNING id, roomnumber
            `, {
                $1: Room.id,
                $2: Room.roomnumber,
            });
            if (pgResp.rows[0]) {
                console.log('id' + payload.id);
                payload.id = pgResp.rows[0].id;
                payload.roomnumber = pgResp.rows[0].roomnumber;
              }
              else{
                  console.log("error")
              }
            return payload;
            },
            reservationCreate: async (Reservation: any) => {
                const pgResp = await pgQuery(`INSERT INTO reservations (id, date_to, date_from, room_id)
            VALUES (
                '${Reservation.id}',
                '${Reservation.date_to}',
                '${Reservation.date_from}',
                '${Reservation.room_id}',
            )`);
            return pgResp;
            }
        },
    };
};