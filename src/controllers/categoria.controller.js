import { getConnection } from './../database/database'

//Categoria Solo sera para mostrar
//Retorna el nombre de la categoria mediante su id, se usara para implementar el insert Insumos
const getIdByNomCat = async (req, res) => {
    try {
        const { nombreCat } = req.params;
        //console.log(nombreCat);
        const connection = await getConnection();
        const result = await connection.query('SELECT idCategoria FROM categoria WHERE nombreCategoria = ?', nombreCat);
        res.json(result[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

//SEL
const selCategoria = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM categoria');
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    };
};

//GET
const getCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM categoria WHERE idCategoria = ?', id);
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};


export const methods = {
    getIdByNomCat,
    selCategoria,
    getCategoria
};