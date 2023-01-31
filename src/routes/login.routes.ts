import { Router } from 'express';
import loginController from '../controller/loginController';
import loginMiddlewares from '../middlewares/loginMiddlewares';

const router = Router();

router.post('/', loginMiddlewares.loginMiddleware, loginController.loginController);

export default router;
