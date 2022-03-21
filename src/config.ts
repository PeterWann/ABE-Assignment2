import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT;

export const postreqConnectionString = process.env.POSTREQ_CONNECTION_STRING;
