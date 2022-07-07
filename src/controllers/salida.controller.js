import { getConnection } from './../database/database'

const selSalida = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM salida_view');
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
}

const getSalida = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM salida_view WHERE idSalida = ?', id);
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
}

/**
 * Para insertar una salida necesito que me envies el nombre de la manufactura, del administrador
 * La fecha lo obtendre en el back
 * totalInsumo :: detalleSalida++
 * costoSalida :: costoSalida += costoDetalle
 * 
 * {
 *	"administrador": "William Chávez",
 *	"manufactura": "Acero VCL",
 *	"totalInsumos": 2,
 *	"costoSalida": 1000
 * }
 * Recuerda que siempre se registra primero la salida y despues se registran los detalles de la salida (insDetalleSalida)
 */
const insSalida = async (req, res) => {
    try {
        const data = req.body;
        const connection = await getConnection();
        const auxIdAdministrador = await connection.query('SELECT idAdmin FROM administrador WHERE nombreAdmin = ?', data.administrador);
        const idAdmin = auxIdAdministrador[0].idAdmin;
        const auxIdManufactura = await connection.query('SELECT idManufactura FROM manufactura WHERE nombreManufactura = ?', data.manufactura);
        const idManufactura = auxIdManufactura[0].idManufactura;
        const fecha = await connection.query('SELECT NOW()');
        const { totalInsumos, costoSalida } = data;
        const auxVal = [idAdmin, idManufactura, fecha, totalInsumos, costoSalida];
        if (auxVal.includes(undefined)) res.status(400).json({ message: 'Verifique los campos para registrar una salida' });
        const salida = { idAdmin, idManufactura, fecha: fecha[0]['NOW()'], totalInsumos, costoSalida };
        // console.log(salida);
        const result = await connection.query('INSERT INTO salida SET ?', salida);
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
}

/**
 * Solo se podra actualizar la manufactura de una salida
 */



/**
 * Se borra una salida y se restaura el stock
 */

export const methods = {
    selSalida,
    getSalida,
    insSalida
}