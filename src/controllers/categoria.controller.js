import { getConnection } from './../database/database'

//Obtener id por nombre
const getIdByCat = async (req, res) => {
    try {
        const { nombreCat } = req.params;
        //console.log(nombreCat);
        const connection = await getConnection();
        const result = await connection.query('SELECT idCategoria FROM categoria WHERE nombreCategoria = ?', nombreCat);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

//SEL


export const methods = {
    getIdByCat,
};