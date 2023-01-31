import { Request, Response } from 'express';
import productsServices from '../service/productsServices';

const addProductController = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const newProduct = await productsServices.addProductService({ name, amount });
  res.status(201).json(newProduct);
};

const getAllProductsController = async (_req: Request, res: Response) => {
  const products = await productsServices.getAllProductsService();
  res.status(200).json(products);
};

export = {
  addProductController,
  getAllProductsController,
};