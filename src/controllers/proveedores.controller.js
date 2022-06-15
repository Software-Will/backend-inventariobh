import { getConnection } from './../database/database'

//SEL
const selProveedores = async (req, res) => {
    try {
        const connection = await getConnection(); //Conexion
        const result = await connection.query('SELECT * FROM proveedores'); //Consulta
        //console.log(JSON.stringify(result));
        res.json(result); //Enviamos el resultado de la consulta en formato json
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

//GET
const getProveedores = async (req, res) => {
    try {
        const { id } = req.params; //Desustructuracion del id que viene en el url
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM proveedores WHERE idProveedor = ?", id);
        //console.log(JSON.stringify(result));
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

//INS
const insProveedores = async (req, res) => {
    try {
        console.log(req.body); //Se imprime el contenido que se envio
        const { nombreProveedor, ruc, telefono, ciudad, direccion } = req.body; //Desestructuracion del body de la peticion
        const aux = [nombreProveedor, ruc, telefono, ciudad, direccion];
        if (aux.includes(undefined)) res.status(400).json({ message: "Verifique los campos para registrar un proveedor" });   //Validamos los campos enviados, no pueden ser vacios
        const proveedores = { nombreProveedor, ruc, telefono, ciudad, direccion }; //Objeto proovedores 
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO proveedores SET ?', proveedores);
        res.json(result); //Se imprime lo que se afecto
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

//UPD
const updProveedores = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombreProveedor, ruc, telefono, ciudad, direccion } = req.body;
        const aux = [nombreProveedor, ruc, telefono, ciudad, direccion];
        if (aux.includes(undefined)) res.status(400).json({ message: "Verifique los campos para actualizar un proveedor" });
        const proveedores = { nombreProveedor, ruc, telefono, ciudad, direccion };
        const connection = await getConnection();
        const result = await connection.query('UPDATE proveedores SET ? WHERE idProveedor = ?', [proveedores, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

//DEL
const delProveedores = async (req, res) => {
    try {
        console.log(req.params); //Se imprime el id
        const { id } = req.params;
        const connection = await getConnection();
        const result = connection.query('DELETE FROM proveedores WHERE idProveedor = ?', id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

export const methods = {
    selProveedores,
    getProveedores,
    insProveedores,
    updProveedores,
    delProveedores
};