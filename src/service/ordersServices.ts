import ordersModels from '../models/ordersModels';
import { IOrders } from '../interfaces/orders.interface';

const getAllOrdersService = async (): Promise<IOrders[]> => {
  const orders = await ordersModels.getAllOrders();
  return orders;
};

const addOrderService = async (order: IOrders) => {
  const newOrder = await ordersModels.addOrder(order);
  return newOrder;
};

export = {
  getAllOrdersService,
  addOrderService,
};