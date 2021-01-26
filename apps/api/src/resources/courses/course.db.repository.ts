import { ICourse } from '@memorio/api-interfaces';
import Course from './course.model';
import { NotFoundError } from './../../errors/errors';

export const getAll = async () => Course.find({});

export const get = async (id: string) => {
  const course = await Course.findOne({ _id: id }).exec();

  if (!course) {
    throw new NotFoundError(`Course with ${id} not found!`);
  }

  return course;
};

export const create = (course: ICourse, userId: string) =>
  Course.create({ ...course, ownerId: userId });

export const update = async (id: string, course: ICourse) =>
  Course.findOneAndUpdate({ _id: id }, { $set: course }, { new: true });
