import { ObjectId, Document } from 'mongoose';

export default interface User extends Document {
  _id: ObjectId,
  wallet: string,
  favourites?: ObjectId[]
};
