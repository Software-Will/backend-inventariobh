import { Router } from 'express'
import { methods as categoriaController } from './../controllers/categoria.controller'

const router = Router();
//Routes
router.get('/', categoriaController.selCategoria); //SEL
router.get('/:id', categoriaController.getCategoria); //GET return data por id
router.get('/nomCat/:nombreCat', categoriaController.getIdByNomCat);//return id por nomCategoria -> Metalico (1) | No Metalico (2)

export default router;