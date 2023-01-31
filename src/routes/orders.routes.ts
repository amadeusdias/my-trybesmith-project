import { Router } from 'express';
import ordersControllers from '../controller/ordersControllers';
import tokenMiddleware from '../middlewares/tokenMiddleware';
import ordersMiddlewares from '../middlewares/ordersMiddlewares';

const router = Router();

router.get('/', ordersControllers.getAllOrdersController);
router.post('/', tokenMiddleware, ordersMiddlewares, ordersControllers.addOrderController);

export default router;