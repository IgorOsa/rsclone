import { IUserProfile } from '@memorio/api-interfaces';
import * as mongoose from 'mongoose';

export const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
    },
    lang: {
      type: String,
      default: 'ru',
    },
    lang2learn: {
      type: String,
      default: 'en',
    },
  },
  {
    collection: 'profiles',
  }
);

const Profile = mongoose.model<IUserProfile & mongoose.Document>(
  'Profile',
  profileSchema
);

export default Profile;
