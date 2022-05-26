import mysql from 'promise-mysql'
import config from './../config'
import colors from 'colors'

//Conexion
const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

//Variable Global -> Acceso a la bd
const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};