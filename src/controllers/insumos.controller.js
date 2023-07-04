import { getConnection } from './../database/database'

//VIEW INSUMOS -> Vista Principal del Panel de Insumos se usara esta funcion en Angular
const viewInsumos = async (req, res) => {
    try {
        const connection = await getConnection(); //Conexion
        const result = await connection.query('SELECT * FROM insumos_view');
        //console.log(JSON.stringify(result));
        res.json(result[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

//SEL -> Esta funcion solo es para el Client API
const selInsumos = async (req, res) => {
    try {
        const connection = await getConnection(); //Conexion
        const result = await connection.query('SELECT * FROM insumos');
        //console.log(JSON.stringify(result));
        res.json(result[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

//GET 
const getInsumos = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM insumos WHERE idInsumo = ?', id);
        res.json(result[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//INS -> Obtendras el IdCategoria en la funcion getIdByNomCat en el controller Categoria (Fijate en su route)
const insInsumos = async (req, res) => {
    try {
        console.log(req.body);
        const { nombreInsumo, descripcion, stock, costo, idCategoria } = req.body;
        const aux = [nombreInsumo, descripcion, stock, costo, idCategoria];
        if (aux.includes(undefined)) res.status(400).json({ message: 'Verifique los campos para registrar un insumo' });
        const insumo = { nombreInsumo, descripcion, stock, costo, idCategoria };
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO insumos SET ?', insumo);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    };
};

//UPD
const updInsumos = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombreInsumo, descripcion, stock, costo, idCategoria } = req.body;
        const aux = [nombreInsumo, descripcion, stock, costo, idCategoria];
        if (aux.includes(undefined)) res.status(400).json({ message: 'Verifique los campos para actualizar un insumo' });
        const insumo = { nombreInsumo, descripcion, stock, costo, idCategoria };
        const connection = await getConnection();
        const result = await connection.query('UPDATE insumos SET ? WHERE idInsumo = ?', [insumo, id]);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    };
};

//DEL
const delInsumos = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = connection.query('DELETE FROM insumos WHERE idInsumo = ?', id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

export const methods = {
    viewInsumos,
    selInsumos,
    getInsumos,
    insInsumos,
    updInsumos,
    delInsumos
};