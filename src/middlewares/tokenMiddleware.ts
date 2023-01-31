import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUsers } from '../interfaces/users.interface';

const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, 'secret');

    console.log(decoded);
    req.body.userId = (decoded as { user: IUsers }).user.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export = tokenValidation;
