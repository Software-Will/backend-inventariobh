import { getConnection } from './../database/database'
import jwt from 'jsonwebtoken'

//VALIDACION
const validacionAdministrador = async (req, res) => {
    const { username, password } = req.body;
    if (username === undefined || password === undefined) {
        res.status(400).json({ message: "Verifique los campos para validar al administrador" });
    };
    const connection = await getConnection();
    const result = connection.query('SELECT * FROM administrador WHERE username = ? AND password = ?',
        [username, password],
        (err, rows, fields) => {
            if (!err) {
                if (rows.length > 0) {
                    let data = JSON.stringify(rows[0]);
                    const token = jwt.sign(data, 'willcd');
                    res.json({ token });
                    console.log({ token });
                } else {
                    res.send('Nombre de usuario o contraseña incorrecto');
                    //res.send(err.message);
                };
            };
        });
    /////////////////////////////
    /*const credenciales = { username, password };
    console.log(credenciales);*/
};

//SEL
const selAdministrador = async (req, res) => {
    res.send('Lo lograste admin');
};

//GET
const getAdministrador = async (req, res) => {

};

//INS
const insAdministrador = async (req, res) => {

};

//UPD
const updAdministrador = async (req, res) => {

};

//DEL
const delAdministrador = async (req, res) => {

};

export const methods = {
    validacionAdministrador,
    selAdministrador,
    getAdministrador,
    insAdministrador,
    updAdministrador,
    delAdministrador
};