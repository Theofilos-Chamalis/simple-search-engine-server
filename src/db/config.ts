import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

const dbName = process.env.DB_NAME ? `src/db/${process.env.DB_NAME}.json` : 'db.json';

const db = new JsonDB(new Config(dbName, true, false, '/'));

export default db;
