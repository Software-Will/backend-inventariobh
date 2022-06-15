import { getConnection } from './../database/database'

//SEL
const selManufactura = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM manufactura');
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

//GET
const getManufactura = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM manufactura WHERE idManufactura = ?', id);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

//INS 
const insManufactura = async (req, res) => {
    try {
        const { nombreManufactura } = req.body;
        if (nombreManufactura === undefined) res.status(400).json({ message: "Verifique el campo para registrar una manufactura" });
        const manufactura = { nombreManufactura };
        const connection = await getConnection();
        const result = await connection.query(`INSERT INTO manufactura SET ?`, manufactura);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

//UPD
const updManufactura = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombreManufactura } = req.body;
        if (nombreManufactura === undefined) res.status(400).json({ message: "Verifique el campo para actualizar una manufactura" });
        const manufactura = { nombreManufactura };
        const connection = await getConnection();
        const result = await connection.query(`UPDATE manufactura SET ? WHERE idManufactura = ?`, [manufactura, id]);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

//DEL
const delManufactura = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = connection.query('DELETE FROM manufactura WHERE idManufactura = ?', id);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

export const methods = {
    selManufactura,
    getManufactura,
    insManufactura,
    updManufactura,
    delManufactura
}