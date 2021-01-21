import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import * as helmet from 'helmet';
import { PORT } from './common/config';
import { connectToDB } from './common/db.client';
import { Message } from '@memorio/api-interfaces';
import authChecker from './auth/authChecker';
import loginRouter from './resources/login/login.router';
import registerRouter from './resources/register/register.router';
import userRouter from './resources/users/user.router';
import { errorHandler } from './errors/errorHandler';

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

app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/users', authChecker, userRouter);

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
