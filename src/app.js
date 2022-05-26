import express from 'express'
import morgan from 'morgan'
import administradorRoutes from './routes/administrador.routes'
import proveedoresRoutes from './routes/proveedores.routes'

const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));


// Routers
//Administradores
app.use('/api/administrador', administradorRoutes);

//Insumos
//app.use('/api/insumos');

//Categoria
//app.use('/api/categoria');

//Proveedores
app.use('/api/proveedores', proveedoresRoutes);



export default app;
