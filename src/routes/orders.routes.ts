import { Router } from 'express';
import ordersControllers from '../controller/ordersControllers';

const router = Router();

router.get('/', ordersControllers.getAllOrdersController);

export default router;