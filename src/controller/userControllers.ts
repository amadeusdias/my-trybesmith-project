import { Request, Response } from 'express';
import usersServices from '../service/usersService';

const addUserController = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;
  const newUser = await usersServices.addUserService({ username, vocation, level, password });
  res.status(201).json({ token: newUser });
};

export = {
  addUserController,
};