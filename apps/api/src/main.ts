import * as express from 'express';
import * as path from 'path';
import { PORT } from './app/config';
import { connectToDB } from './app/db.client';
import { Message } from '@memorio/api-interfaces';

const app = express();

app.use(express.static(path.join(__dirname, '../memorio')));

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../memorio', 'index.html'));
});

connectToDB(() => {
  const server = app.listen(PORT, () => {
    console.log('Listening at http://localhost:' + PORT + '/api');
  });
  server.on('error', console.error);
});
