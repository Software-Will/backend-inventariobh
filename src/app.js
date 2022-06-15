import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import administradorRoutes from './routes/administrador.routes'
import proveedoresRoutes from './routes/proveedores.routes'
import insumosRoutes from './routes/insumos.routes'
import categoriaRoutes from './routes/categoria.routes'
import manufacturaRoutes from './routes/manufactura.routes'

const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routers
//Administradores
app.use('/api/administrador', administradorRoutes);

//Insumos
app.use('/api/insumos', insumosRoutes);

//Categoria
app.use('/api/categoria', categoriaRoutes);

//Proveedores
app.use('/api/proveedores', proveedoresRoutes);

//Manufactura
app.use('/api/manufactura', manufacturaRoutes);

export default app;
