import { Request, Response, NextFunction } from 'express';

const idsValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (productsIds === undefined) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  // const validateNumber = productsIds.every((id) => typeof id === 'number');
  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
};

export = idsValidation;
