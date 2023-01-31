import { Router } from 'express';
import productsControllers from '../controller/productsControllers';

const router = Router();

router.post('/', productsControllers.addProduct);

export default router;