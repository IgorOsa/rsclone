import * as express from 'express';
import * as path from 'path';
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

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
