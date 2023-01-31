import { Router } from 'express';
import usersControllers from '../controller/userControllers';

const router = Router();

router.post('/', usersControllers.addUserController);

export default router;