import productsModels from '../models/productsModels';
import { IProducts } from '../interfaces/products.interface';

const addProductService = async (product: IProducts): Promise<IProducts> => {
  const { name, amount } = product;
  const newProduct = await productsModels.addProduct({ name, amount });
  return newProduct;
};

export = {
  addProductService,
};
