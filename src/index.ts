import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { pinoLogger, pinoExpress } from './utils/logger';

dotenv.config({ path: '.env' });

import companyRoutes from './routes/companies';

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

process.on('SIGINT', async () => {
  pinoLogger.error(`${process.env.npm_package_name} has stopped!`);
  throw new Error(`${process.env.npm_package_name} stopped!`);
});
