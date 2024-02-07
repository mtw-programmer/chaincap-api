import mongoose from 'mongoose';
import User from '../interfaces/User';

const schema = new mongoose.Schema<User>({
  wallet: {
    type: String,
    minlength: 42,
    maxlength: 42,
    unique: true,
    required: true
  },
  favourites: {
    type: [mongoose.Types.ObjectId],
    ref: 'Stock'
  }
});

export default mongoose.model<User>('User', schema);
