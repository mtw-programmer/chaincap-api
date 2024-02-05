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
  }
});

export default mongoose.model<Stock>('Stock', schema);
