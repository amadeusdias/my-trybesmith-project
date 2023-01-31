import { Router } from 'express';
import productsControllers from '../controller/productsControllers';

const router = Router();

router.post('/', productsControllers.addProductController);
router.get('/', productsControllers.getAllProductsController);

export default router;