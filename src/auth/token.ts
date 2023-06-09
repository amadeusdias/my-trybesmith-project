import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUsers } from '../interfaces/users.interface';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (user: IUsers): string => {
  const token = jwt.sign({ user }, secret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

export = createToken;
