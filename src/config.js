import { config } from 'dotenv'

config(); //Dispone las variables de entorno en .env

export default {
    host: process.env.HOST || '',
    database: process.env.DATABASE || '',
    user: process.env.USER || '',
    password: process.env.PASSWORD || '',
    port: process.env.DB_PORT || ''
};