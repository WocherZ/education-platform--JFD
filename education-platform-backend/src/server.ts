import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, 'env', `.${process.env.NODE_ENV}.env`)
}); 

import logger from './utils/logger';

import express from 'express';
import router from './router';
import bodyParser from 'body-parser';
import { sequelize } from './sequelize';
import morganMiddleware from "./middlewares/morgan.middleware";
import { ErrorMiddleware } from './middlewares/error.middleware';
import passport from 'passport';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morganMiddleware);
app.use(passport.initialize());
require('./service/jwtStrategy.service');

app.use("/api", router);
app.use(ErrorMiddleware);

async function start() {
  try {
    await sequelize.sync({alter: true, force: true});
    logger.info(`sequelize sync`);
    app.listen(port, () => {
      logger.info(`app listening on port ${port}`);
    });    
  } catch (e)
  {
    logger.error(`app failed${e}`);
  }
}
start();