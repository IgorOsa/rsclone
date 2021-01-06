import * as mongoose from 'mongoose';
import { MONGO_CONNECTION_STRING } from './config';

export const connectToDB = (cb: () => void) => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'db connection error'));
  db.once('open', () => {
    console.log('Connected to MongoDB!');
    cb();
  });
};
