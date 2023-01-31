import userModels from '../models/userModels';
import { IUsers } from '../interfaces/users.interface';
import createToken from '../auth/token';

const addUserService = async (user : IUsers) : Promise<string> => {
  const { username, vocation, level, password } = user;
  const id = await userModels.addUser({ username, vocation, level, password });
  const token = createToken({ id, ...user });
  return token;
};

export = {
  addUserService,
};