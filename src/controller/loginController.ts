import { Request, Response } from 'express';
import usersServices from '../service/usersService';

const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = await usersServices.getUserService({ username, password });
  if (!token) return res.status(401).json({ message: 'Username or password invalid' });
  res.status(200).json({ token });
};

export = {
  loginController,
};
