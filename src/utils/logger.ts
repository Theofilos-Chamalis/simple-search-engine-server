import pinoExpress from 'express-pino-logger';
import pino from 'pino';

const pinoLogger = pino(
  { name: process.env.npm_package_name, level: 'info' },
  pino.transport({ target: 'pino-pretty' }),
);

export { pinoExpress, pinoLogger };
