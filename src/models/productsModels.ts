import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts } from '../interfaces/products.interface';

const addProduct = async (product: IProducts): Promise<IProducts> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  
  const [result] = await connection.execute<ResultSetHeader>(query, values);

  const { insertId: id } = result;
  return { id, name, amount };
}; 

const getAllProducts = async (): Promise<IProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute(query);
  return result as IProducts[];
};

const getProductById = async (id: number): Promise<IProducts[] | null> => {
  const query = 'SELECT * FROM Trybesmith.products WHERE id = ?';
  const values = [id];
  const [result] = await connection.execute(query, values);
  return result as IProducts[] || null;
};

export = {
  addProduct,
  getAllProducts,
  getProductById,
};