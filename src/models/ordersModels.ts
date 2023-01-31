import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IOrders } from '../interfaces/orders.interface';

const getAllOrders = async (): Promise<IOrders[]> => {
  const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
  FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
  WHERE o.id = p.order_id GROUP BY o.id`;
  const [result] = await connection.execute(query);
  return result as IOrders[];
};

const addOrder = async (order: IOrders) => {
  const queryInsert = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const queryUpdate = `UPDATE Trybesmith.products 
  SET order_id = ?
  WHERE id = ?`;
  const { productsIds, userId } = order;
  const [result] = await connection.execute<ResultSetHeader>(queryInsert, [userId]);
  const { insertId: orderId } = result;
  Promise.all(productsIds.map((p) => 
    connection.execute<ResultSetHeader>(queryUpdate, [orderId, p])));
  return { userId, productsIds };
};

export = {
  getAllOrders,
  addOrder,
};