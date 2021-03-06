import express, { Request, Response } from 'express';
import db from '../db/config';
import { pinoLogger } from '../utils/logger';

const router = express.Router();

const API_KEY = process.env.API_KEY;

/**
 * GET /api/companies endpoint that returns the list of companies
 * that is retrieved from the existing company.db.json file. If
 * the request does not include the appropriate API KEY in its headers,
 * we reject the incoming request.
 *
 */
router.get('/', async (req: Request, res: Response) => {
  const reqApiKey = req.get('x-api-key');

  if (reqApiKey !== API_KEY) {
    pinoLogger.warn(`Unauthorized attempt by ${req.ip}!`);
    return res.status(401).send({ message: 'Not authorized!' });
  }

  const data = db.getData('/');

  return res.status(200).send(data);
});

export default router;
