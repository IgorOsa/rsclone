import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import * as helmet from 'helmet';
import { PORT } from './common/config';
import { connectToDB } from './common/db.client';
import { Message } from '@memorio/api-interfaces';
import authChecker from './auth/authChecker';
import coursesRouter from './resources/courses/course.router';
import loginRouter from './resources/login/login.router';
import registerRouter from './resources/register/register.router';
import userRouter from './resources/users/user.router';
import { errorHandler } from './errors/errorHandler';
import logger from './common/logger';

const app = express();
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../memorio')));

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res, next) => {
  if (req.originalUrl === '/api') {
    res.send(greeting);
    return;
  }
  next();
});

app.use(logger.logToConsole);
app.use(logger.logAccess);
app.use(logger.logError);

app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/users', authChecker, userRouter);
app.use('/api/courses', authChecker, coursesRouter);

app.use(errorHandler);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../memorio', 'index.html'));
});

connectToDB(() => {
  const server = app.listen(PORT, () => {
    console.log('Listening at http://localhost:' + PORT + '/api');
  });
  server.on('error', console.error);
});
