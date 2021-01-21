import { IUser } from '@memorio/api-interfaces';
import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import { hashPassword } from './../../auth/hashHelpers';

export interface IUserModel extends IUser, mongoose.Document {
  id?: string;
  toResponse(): IUserResponse;
  fromRequest(): IUser;
}

export type IUserResponse = Omit<IUser, 'password'>;

const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuid.v1(),
    },
    name: {
      type: String,
    },
    login: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
  },
  {
    collection: 'users',
  }
);

async function setHashedPassword(next) {
  this.password = await hashPassword(this.password);
  next();
}

async function updateHashedPassword(next) {
  if (this._update.password) {
    const newPassword = await hashPassword(this._update.password);
    this._update.password = newPassword;
  }

  next();
}

// hash user password before saving into database
userSchema.pre('save', setHashedPassword);
userSchema.pre('findOneAndUpdate', updateHashedPassword);

userSchema.method('toResponse', function () {
  const { _id, ...rest } = this.toJSON();
  delete rest.password;
  delete rest.__v;
  return { id: _id, ...rest };
});

const User = mongoose.model<IUserModel>('User', userSchema);

export default User;
