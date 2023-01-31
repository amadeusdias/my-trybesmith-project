import { Request, Response } from 'express';
import productsServices from '../service/productsServices';

const addProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const newProduct = await productsServices.addProductService({ name, amount });
  res.status(201).json(newProduct);
};

export = {
  addProduct,
};