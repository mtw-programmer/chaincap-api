import { ObjectId, Document } from 'mongoose';

export default interface Stock extends Document {
  _id: ObjectId,
  img: String,
  title: String,
};