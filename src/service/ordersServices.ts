import ordersModels from '../models/ordersModels';
import { IOrders } from '../interfaces/orders.interface';

const getAllOrdersService = async (): Promise<IOrders[]> => {
  const orders = await ordersModels.getAllOrders();
  return orders;
};

export = {
  getAllOrdersService,
};