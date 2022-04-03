import pinoExpress from 'express-pino-logger';
import pino from 'pino';

/**
 * Global logger configuration based on pino.js
 * that prettifies the logged output.
 *
 * @type {any | Logger<{level: string, name: string}>}
 */
const pinoLogger = pino(
  { name: process.env.npm_package_name, level: 'info' },
  pino.transport({ target: 'pino-pretty' }),
);

export { pinoExpress, pinoLogger };
