import { getConnection } from '../../database/database'
import { config } from 'dotenv'
import jwt from 'jsonwebtoken'

config();

//Autenticacion -> Obtengo el objeto y encapsulo en un jwt
const authAdministrador = async (req, res) => {
    const { username, password } = req.body;
    if (username === undefined || password === undefined) {
        res.status(400).json({ message: "Verifique los campos para validar al administrador" });
    };
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM administrador WHERE username = ? AND password = ?',
        [username, password]);

    if (result) {
        if (result[0].length > 0) {
            let data = JSON.stringify(result[0]); //Format -> Data -> JSON
            const token = jwt.sign(data, process.env.KEY_TOKEN); //Encriptamos la informacion
            res.json({ token }); //Devolvemos el token
            console.log({ token });
        } else {
            res.send('Nombre de usuario o contraseña incorrecto');
        }
    }
    // (err, rows, fields) => {
    // if (!err) {
    //     if (rows.length > 0) {
    //         let data = JSON.stringify(rows[0]); //Format -> Data -> JSON
    //         const token = jwt.sign(data, process.env.KEY_TOKEN); //Encriptamos la informacion
    //         res.json({ token }); //Devolvemos el token
    //         console.log({ token });
    //     } else {
    //         res.send('Nombre de usuario o contraseña incorrecto');
    //         //res.send(err.message);
    //     };
    // };
    // });
    // console.log(result);
};

//Validacion del token generado para acceder a los verbos del api
const verifyToken = async (req, res, next) => { //Next -> Autorizacion, El token se envia por lo headers: Authorization -> Bearer (Token: Codigo)
    if (!req.headers.authorization) return res.status(401).json('Administrador no autorizado');
    const token = req.headers.authorization.substr(7);// -> <Bearer ><Token>
    //console.log(token); 
    //Comprobamos de que el token enviado no se vacio
    if (token !== '') {
        const content = jwt.verify(token, process.env.KEY_TOKEN); //Decodifica el token -> Return object admin
        console.log(content); //Object Admin test
        req.data = content; //Return req.data -> testToken
        next(); //Como ya valido debe ir a la siguiente funcion que es testToken
    } else {
        res.status(401).json('Token Vacio');
    };
};

//Test del token -> Client API -> api/administrador/testToken
const testToken = async (req, res) => {
    console.log(req.data); //Json desencriptado enviado desde verificar token
    //console.log(req.data.nombreAdmin);
    res.json('Accediste eres admin :b');
};

export const methods = {
    authAdministrador,
    verifyToken,
    testToken,

};