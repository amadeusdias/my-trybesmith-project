import { Router } from 'express';
import productsControllers from '../controller/productsControllers';
import productsMiddlewares from '../middlewares/productsMiddlewares';

const router = Router();

router.post(
  '/', 
  productsMiddlewares.productsAmountValidation,
  productsMiddlewares.productsNameValidation,
  productsControllers.addProductController,
);

router.get('/', productsControllers.getAllProductsController);

export default router;