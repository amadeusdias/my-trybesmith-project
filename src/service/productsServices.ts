import productsModels from '../models/productsModels';
import { IProducts } from '../interfaces/products.interface';

const addProductService = async (product: IProducts): Promise<IProducts> => {
  const { name, amount } = product;
  const newProduct = await productsModels.addProduct({ name, amount });
  return newProduct;
};

const getAllProductsService = async (): Promise<IProducts[]> => {
  const products = await productsModels.getAllProducts();
  return products;
};

export = {
  addProductService,
  getAllProductsService,
};
