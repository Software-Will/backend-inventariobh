import { Router } from 'express'
import { methods as categoriaController } from './../controllers/categoria.controller'

const router = Router();
//Routes
router.get('/idCategoria/:nombreCat', categoriaController.getIdByCat);//id categoria por nombre

export default router;