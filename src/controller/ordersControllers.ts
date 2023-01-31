import { Request, Response } from 'express';
import ordersServices from '../service/ordersServices';

const getAllOrdersController = async (_req: Request, res: Response) => {
  const orders = await ordersServices.getAllOrdersService();
  res.status(200).json(orders);
};

const addOrderController = async (req: Request, res: Response) => {
  const order = await ordersServices.addOrderService(req.body);
  res.status(201).json(order);
};
  
export = {
  getAllOrdersController,
  addOrderController,
};
