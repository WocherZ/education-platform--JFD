import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize(process.env.DB_URI || "", 
  {models : [`${__dirname}/models/`], 
  logging: false
}
  );
