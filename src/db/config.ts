import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import path from 'path';

/**
 * Use the node-json-db lib to parse the existing JSON file
 * with the companies data. This lib also supports adding and
 * removing elements from the JSON file if required.
 *
 * @type {string}
 */
const dbName = process.env.DB_NAME
  ? path.join(__dirname, `${process.env.DB_NAME}.json`)
  : path.join(__dirname, `db.json`);

const db = new JsonDB(new Config(dbName, true, false, '/'));

export default db;
