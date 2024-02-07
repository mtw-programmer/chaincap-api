import mongoose from 'mongoose';
import StockUpdate from '../interfaces/StockUpdate';

const schema = new mongoose.Schema<StockUpdate>({
  stockId: {
    type: mongoose.Types.ObjectId,
    ref: 'Stock',
    required: true
  },
  buyPrice: {
    type: Number,
    min: 0,
    max: 999999999,
    required: true
  },
  sellPrice: {
    type: Number,
    min: 0,
    max: 999999999,
    required: true
  },
  __v: {
    type: Number,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

export default mongoose.model<StockUpdate>('StockUpdate', schema);
