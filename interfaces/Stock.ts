import { ObjectId, Document } from 'mongoose';

export default interface Stock extends Document {
  _id: ObjectId,
  img: string,
  title: string,
  buyPrice?: number,
  sellPrice?: number,
  priceDiff?: string
};
