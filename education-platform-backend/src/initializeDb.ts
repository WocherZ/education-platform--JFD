import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../env', `.${process.env.NODE_ENV}.env`)
}); 

import logger from './utils/logger';
import pg from "pg";
const dbName = process.env.DB_NAME || "JFD";
const conStringPri = `${process.env.DB_URI}/postgres`;
const client = new pg.Client(conStringPri);
const createDatabase = async () => {
  try {
      await client.connect();                            // gets connection
      const result = await client.query(`SELECT 1 FROM pg_catalog.pg_database WHERE datname = '${dbName}'`); //check IF EXISTS database
      if (result.rowCount === 0) {
              await client.query(`CREATE DATABASE "${dbName}";`);   // CREATE database IF NOT EXISTS
      }
      return true;
  } catch (error) {
      logger.error(error);
      return false;
  } finally {
      await client.end();                                // closes connection
  }
};

createDatabase().then((result) => {
  if (result) {
    logger.info(`Database '${dbName}' checked or created`);
    process.exit(0);
  }
});