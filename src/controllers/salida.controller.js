import { getConnection } from './../database/database'

const selSalida = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM salida_view');
        res.json(result[0]);
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
        res.json(result[0]);
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
const updSalida = async (req, res) => {
    try {
        const { id } = req.params;
        const { manufactura } = req.body;
        const connection = await getConnection();
        const auxIdManufactura = await connection.query('SELECT idManufactura FROM manufactura WHERE nombreManufactura = ?', manufactura);
        const idManufactura = auxIdManufactura[0].idManufactura;
        const salida = { idManufactura };
        const result = await connection.query('UPDATE salida SET ? WHERE idSalida = ?', [salida, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
}


/**
 * Se borra una salida y se restaura el stock
 */
const delSalida = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const obtenerStockRestaurar = await connection.query('SELECT * FROM detalleSalida WHERE idSalida = ?', id);
        for (let i = 0; i < obtenerStockRestaurar.length; i++) {
            const idInsumo = obtenerStockRestaurar[i].idInsumo; // Recuperamos los ids de los insumos para restaurar su stock
            const cantidadSalida = obtenerStockRestaurar[i].cantidadSalida; // Recuperamos lo que salio para ser restaurado
            const stockActualInsumo = await connection.query('SELECT nombreInsumo, stock FROM insumos WHERE idInsumo = ?', idInsumo);
            const stockActual = stockActualInsumo[0].stock;
            const stockRestaurar = stockActual + cantidadSalida;
            const stock = stockRestaurar; // Propiedad del objeto insumos
            if (!stock || stock === undefined || stock < 0) res.status(400).json({ message: "Error en eliminar salida y restaurar stock" });
            const insumos = { stock };
            await connection.query('UPDATE insumos SET ? WHERE idInsumo = ?', [insumos, idInsumo]); // Restauramos el stock de los insumos
            // Datos restaurados
            console.log(`idInsumo: ${obtenerStockRestaurar[i].idInsumo}`);
            console.log(`Nombre Insumo: ${stockActualInsumo[0].nombreInsumo}`.red);
            console.log(`Stock Actual: ${stockActual}`);
            console.log(`Stock a aumentar: ${cantidadSalida}`);
            console.log(`Stock restaurado: ${stockRestaurar}`);
            console.log();
        }
        await connection.query('DELETE FROM salida WHERE idSalida = ?', id); // Sel elimina la salida 
        res.json({ message: 'Se elimino la salida y se restauro el stock' });

    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
}

export const methods = {
    selSalida,
    getSalida,
    insSalida,
    updSalida,
    delSalida
}