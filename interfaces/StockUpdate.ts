import { ObjectId, Document } from 'mongoose';

export default interface StockUpdate extends Document {
  _id: ObjectId,
  stockId: ObjectId,
  buyPrice: number,
  sellPrice: number,
  createdAt: Date
};
