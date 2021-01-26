import { ICourse } from '@memorio/api-interfaces';
import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

export interface ICourseModel extends ICourse, mongoose.Document {
  id?: string;
  toResponse(): ICourse;
}

const courseSchema: mongoose.Schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuid.v1(),
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    ownerId: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: 'courses',
  }
);

courseSchema.method('toResponse', function (this: ICourseModel) {
  const { _id, ...rest } = this.toJSON();
  delete rest.__v;
  return { id: _id, ...rest };
});

const Course = mongoose.model<ICourseModel>('Course', courseSchema);

export default Course;
