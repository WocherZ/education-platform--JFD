import { Sequelize } from 'sequelize-typescript';

const uri = `${process.env.DB_URI}/${process.env.DB_NAME}` || "";

export const sequelize = new Sequelize(uri, 
  {models : [`${__dirname}/models/`], 
  logging: false
}
  );
