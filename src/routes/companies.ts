import express, { Request, Response } from 'express';
import db from '../db/config';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const data = db.getData('/');

  res.status(200).send({ data });
});

export default router;
