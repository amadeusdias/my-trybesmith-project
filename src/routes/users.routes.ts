import { Router } from 'express';
import usersControllers from '../controller/userControllers';
import usersMiddlewares from '../middlewares/usersMiddlewares';

const router = Router();

router.post(
  '/',
  usersMiddlewares.passwordValidation,
  usersMiddlewares.usernameValidation,
  usersMiddlewares.vocationValidation,
  usersMiddlewares.levelValidation,
  usersControllers.addUserController,
);

export default router;