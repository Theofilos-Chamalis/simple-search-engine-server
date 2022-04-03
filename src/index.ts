import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import companyRoutes from './routes/companies';

dotenv.config({ path: '.env' });

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', companyRoutes);

// createConnection()
//   .then(() => {
//     console.log('Database connected 💾!');
//     app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
//   })
//   .catch(error => console.error(error));

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));

process.on('SIGINT', async () => {
  //   const dbConnection = await getConnection();
  //   await dbConnection?.close();
  throw new Error(`${process.env.npm_package_name} stopped!`);
});
