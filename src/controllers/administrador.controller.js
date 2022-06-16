import { getConnection } from './../database/database'


//SEL
const selAdministrador = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM administrador');
        res.json(result);
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
        res.json(result);
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


export const methods = {
    selAdministrador,
    getAdministrador,
    updAdministrador
};