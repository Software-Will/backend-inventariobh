import { createPool } from 'mysql2/promise'
import config from './../config'
import colors from 'colors'

//Conexion
const connection = createPool({
    user: config.user,
    password: config.password,
    host: config.host,
    port: config.port,
    database: config.database,
});

//Variable Global -> Acceso a la bd
const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};