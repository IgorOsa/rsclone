import { IUserProfile, IUserStats } from '@memorio/api-interfaces';
import { EntityExistsError, NotFoundError } from '../../errors/errors';
import Profile from './profile.model';

const MONGO_ENTITY_EXISTS_ERROR_CODE = 11000;

export const create = async (profile: IUserProfile = {}, userId: string) => {
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

export const update = async (id: string, profile: IUserProfile) => {
  const updatedProfile = await Profile.findOneAndUpdate(
    { userId: id },
    profile
  );

  if (!updatedProfile) {
    throw new NotFoundError(`Profile with id: ${id} not found!`);
  }

  return updatedProfile;
};

export const getUserStats = async (id: string) => {
  const profile = await Profile.findOne({ userId: id });

  if (!profile || !profile.statistics) {
    throw new NotFoundError(`Wrong id or profile not exists!`);
  }

  return profile.statistics;
};

export const updateUserStats = async (id: string, stats: IUserStats) => {
  const updatedProfile = await Profile.findOneAndUpdate(
    { userId: id },
    { $set: { statistics: stats } },
    { new: true }
  );

  if (!updatedProfile || !updatedProfile.statistics) {
    throw new NotFoundError(`Wrong id or profile not exists!`);
  }

  return updatedProfile.statistics;
};
