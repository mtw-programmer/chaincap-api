import mongoose from 'mongoose';
import Stock from '../interfaces/Stock';

const schema = new mongoose.Schema<Stock>({
  img: {
    type: String,
    minlength: 1,
    maxlength: 128,
    required: true
  },
  title: {
    type: String,
    minlength: 1,
    maxlength: 30,
    required: true
  },
  buyPrice: {
    type: Number,
    min: 0,
    max: 999999999
  },
  sellPrice: {
    type: Number,
    min: 0,
    max: 999999999
  },
  __v: {
    type: Number,
    select: false
  },
  priceDiff: {
    type: String,
    minlength: 2,
    maxlength: 6
  }
});

export default mongoose.model<Stock>('Stock', schema);
