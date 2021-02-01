import { LOGS_DIR } from './config';
import { appendFileSync, createWriteStream } from 'fs';
import * as morgan from 'morgan';

const exit = process.exit;

morgan.token('body', (req: any): string => {
  const reqBody = { ...req.body };
  delete reqBody.password;
  return JSON.stringify(reqBody);
});

morgan.token('queryParams', (req: any): string => {
  return JSON.stringify(req.query);
});

const logFormat =
  '[:date[iso]] :method :status :url queryParams::queryParams body::body size :res[content-length] - :response-time ms';

const logToConsole = morgan(logFormat, {
  // skip: (req, res) => res.statusCode < 500,
});

const logAccessFile = createWriteStream(`${LOGS_DIR}/access.log`, {
  flags: 'a',
  encoding: 'utf8',
});

const logAccess = morgan(logFormat, {
  stream: logAccessFile,
});

const logErrorFile = createWriteStream(`${LOGS_DIR}/error.log`, {
  flags: 'a',
  encoding: 'utf8',
});

const logError = morgan(logFormat, {
  stream: logErrorFile,
  skip: (req, res) => res.statusCode < 500,
});

const logProcessError = (err) => {
  console.error(err.stack);

  appendFileSync(
    `${LOGS_DIR}/error.log`,
    `[${new Date().toLocaleString()}] - ${err.stack}\n`,
    {
      encoding: 'utf8',
    }
  );

  exit(1);
};

export default { logToConsole, logAccess, logError, logProcessError };
