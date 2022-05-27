import { getConnection } from '../../database/database'
import jwt from 'jsonwebtoken'

//VALIDACION
const authAdministrador = async (req, res) => {
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
                    let data = JSON.stringify(rows[0]); //Format -> Data -> JSON
                    const token = jwt.sign(data, 'willcd'); //Encriptamos la informacion
                    res.json({ token }); //Devolvemos el token
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
}; //VARIABLE SECRETA EN UN VARIABLE DE ENTORNO

//Testeo del acceso a la informacion
const testToken = async (req, res) => {
    console.log(req.data); //Esta es la info que mandel del verificar token, ahora puedo utilizar el objeto administrador para acceder a datos manualmente
    //console.log(req.data.nombreAdmin);
    res.json('Accediste eres admin :)');
};

//Funcion para validad el token para que con ello se pueda acceder a los verbos del api rest
const verificarToken = async (req, res, next) => { //Next -> Autorizacion, El token se envia por lo headers: Authorization -> Bearer (Token: Codigo)
    if (!req.headers.authorization) return res.status(401).json('Administrador no autorizado');

    const token = req.headers.authorization.substr(7);// -> <Bearer ><Token>
    //Obtengo el token
    //console.log(token); //Se imprime en consola para validar

    //Comprobamos el almacenamiento del token en local storage con el token generado
    if (token !== '') {
        const content = jwt.verify(token, 'willcd'); //Decodifica el token y me devulve la informacion
        console.log(content); //Se imprime el objeto con los datos del admin
        req.data = content; //Esto sera lo que devuelva a la funcion testeoToken
        next(); //Como ya valido debe ir a la siguiente funcion que es testeoToken
    } else {
        res.status(401).json('Token Vacio');
    };
};

export const methods = {
    authAdministrador,
    testToken,
    verificarToken
};