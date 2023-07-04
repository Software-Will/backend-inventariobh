import { getConnection } from './../database/database'


//SEL
const selAdministrador = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM administrador');
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    };
}

//GET
const getAdministrador = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM administrador WHERE idAdmin = ?', id);
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    };
};

//UPD
/**
 * Solo se permitira que actulice su telefono y mail
 */
const updAdministrador = async (req, res) => {
    try {
        const { id } = req.params;
        const { telefono, mail } = req.body;
        const auxVal = [telefono, mail];
        if (auxVal.includes(undefined)) res.status(400).json({ message: "Verifique los campos para actualizar un administrador" });
        const administrador = { telefono, mail };
        const connection = await getConnection();
        const result = await connection.query('UPDATE administrador SET ? WHERE idAdmin = ?', [administrador, id]);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

// CAMBIO CONTRASEÑA
/**
* Para lo cual solo se requiere dos password
*/
const updPassword = async (req, res) => {
    try {
        console.log(req.body);
        const { idAdmin, newPassword } = req.body;
        const auxVal = [idAdmin, newPassword];
        if (auxVal.includes(undefined)) res.status(400).json({ message: "Verifique los campos para actualizar un administrador" });
        const connection = await getConnection();
        const result = await connection.query(
            "UPDATE administrador SET password = ? WHERE idAdmin = ?",
            [newPassword, idAdmin]
        );
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(err.message);
    }

}


export const methods = {
    selAdministrador,
    getAdministrador,
    updAdministrador,
    updPassword
};