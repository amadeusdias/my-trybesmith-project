import connection from './connection';
import { IOrders } from '../interfaces/orders.interface';

const getAllOrders = async (): Promise<IOrders[]> => {
  const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
  FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
  WHERE o.id = p.order_id GROUP BY o.id`;
  const [result] = await connection.execute(query);
  return result as IOrders[];
};

export = {
  getAllOrders,
};