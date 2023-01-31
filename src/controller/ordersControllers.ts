import { Request, Response } from 'express';
import ordersServices from '../service/ordersServices';

const getAllOrdersController = async (_req: Request, res: Response) => {
  const orders = await ordersServices.getAllOrdersService();
  res.status(200).json(orders);
};

export = {
  getAllOrdersController,
};
