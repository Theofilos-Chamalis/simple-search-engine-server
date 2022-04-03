import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import pinoExpress from 'express-pino-logger';
import pino from 'pino';

dotenv.config({ path: '.env' });

import db from './db/config';
import companyRoutes from './routes/companies';

const pinoLogger = pino(
  { name: process.env.npm_package_name, level: 'info' },
  pino.transport({ target: 'pino-pretty' }),
);

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(pinoExpress({ logger: pinoLogger, autoLogging: false }));

app.use('/api/companies', companyRoutes);

app.listen(PORT, () => {
  pinoLogger.info(`Running on ${PORT} ⚡`);
});

const data = db.getData('/');
console.log(data);

process.on('SIGINT', async () => {
  pinoLogger.error(`${process.env.npm_package_name} has stopped!`);
  throw new Error(`${process.env.npm_package_name} stopped!`);
});
