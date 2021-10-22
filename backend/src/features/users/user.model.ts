import mongoose from 'mongoose';
export interface IUser {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.index({ email: 1 });

export default mongoose.model<IUser>('User', userSchema);
