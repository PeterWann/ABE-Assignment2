import Reservation from '../schema/types/reservation';
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
            }
        },
        mutators: {
            roomCreate: async (Room: any) => {
                const pgResp = await pgQuery(`INSERT INTO rooms (id, price, roomnumber, fridge, 
                    aircondition, television, roomservice, available, createdAt)
            VALUES (
                '${Room.id}',
                '${Room.price}',
                '${Room.roomnumber}',
                '${Room.fridge}',
                '${Room.aircondition}',
                '${Room.television}',
                '${Room.roomservice}',
                '${Room.available}',
                '${Room.createdAt}'
            )
            `)
            },
            reservationCreate: async (Reservation: any) => {
                const pgResp = await pgQuery(`INSERT INTO reservations (id, to, from, room)
            VALUES (
                '${Reservation.id}',
                '${Reservation.to}',
                '${Reservation.from}',
                '${Reservation.room}',
            )`)
            }
        },
    };
};