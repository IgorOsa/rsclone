import { ICourse } from '@memorio/api-interfaces';
import * as coursesRepo from './course.db.repository';

export const getAll = () => coursesRepo.getAll();

export const get = (id: string) => coursesRepo.get(id);

export const create = (course: ICourse, userId: string) =>
  coursesRepo.create(course, userId);

export const update = (id: string, course: ICourse) =>
  coursesRepo.update(id, course);
