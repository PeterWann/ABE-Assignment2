import pgClient from './pg-client';

const pgApiWrapper = async () => {
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
                const res = await pgQuery(`SELECT * from reservations`);
                return res.rows;
            }
        },
        mutators: {
            roomCreate: async (room: any) => {
                const pgResp = await pgQuery(`INSERT INTO rooms (id, available)
            VALUES (
                '${room.id}',
                '${room.available}'
            )
            `)
            }
        },
    };
};