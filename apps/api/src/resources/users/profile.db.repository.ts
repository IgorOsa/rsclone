import { EntityExistsError } from '../../errors/errors';
import Profile from './profile.model';

const MONGO_ENTITY_EXISTS_ERROR_CODE = 11000;

export const create = async (profile, userId: string) => {
  try {
    return await Profile.create({
      ...profile,
      userId: userId,
    });
  } catch (err) {
    if (err.code === MONGO_ENTITY_EXISTS_ERROR_CODE) {
      throw new EntityExistsError(`Error creating user's profile: exists!`);
    } else {
      throw err;
    }
  }
};
