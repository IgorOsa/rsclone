import { IUser } from '@memorio/api-interfaces';
import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import { hashPassword } from './../../common/hashHelpers';

interface IUserModel extends IUser, mongoose.Document {
  toResponse(): IUserResponse;
  fromRequest(): IUser;
}

interface IUserResponse extends Omit<IUser, 'password'> {
  id: string;
}

const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    name: {
      type: String,
    },
    login: {
      type: String,
      unique: true,
      required: true,
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
    versionKey: false,
  }
);

async function setHashedPassword(next) {
  this.password = await hashPassword(this.password);
  next();
}

async function updateHashedPassword(next) {
  const docToUpdate = await this.model.findOne(this.getQuery());

  if (docToUpdate.password !== this._update.password) {
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

userSchema.method('fromRequest', function (user: IUser) {
  const { login, password, name } = user;
  return new User({ login, password, name });
});

const User = mongoose.model<IUserModel>('User', userSchema);

export default User;
