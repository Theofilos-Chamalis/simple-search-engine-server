import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { pinoLogger, pinoExpress } from './utils/logger';

// Load the contents of the .env file.
dotenv.config({ path: '.env' });

import companyRoutes from './routes/companies';

const PORT = process.env.PORT || 3100;
const app: Express = express();

// Apply all required middleware.
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(pinoExpress({ logger: pinoLogger, autoLogging: false }));

// Expose the "companies" API endpoints under the /api/companies prefix.
app.use('/api/companies', companyRoutes);

// Start the server.
app.listen(PORT, () => {
  pinoLogger.info(`Running on ${PORT} ⚡`);
});

// Throw an error when we try to stop the server.
process.on('SIGINT', async () => {
  pinoLogger.error(`${process.env.npm_package_name} has stopped!`);
  throw new Error(`${process.env.npm_package_name} stopped!`);
});
