import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../env', `.${process.env.NODE_ENV}.env`)
}); 

import logger from './utils/logger';

import pg from "pg";

const dbName = process.env.DB_NAME || "JFD";
// const dbName = "jfd121";
// console.log(`${process.env.DB_URI}/${dbName}`);

const conStringPri = `${process.env.DB_URI}/postgres`;
// const conStringPost = `${process.env.DB_URI}/${dbName}`;

// const client = new pg.Client(conStringPri);
// export const sequelize =
// client.connect().
// then(() => {client.query(`SELECT 1 FROM pg_catalog.pg_database WHERE datname = '${dbName}'`).
// then((result) => { console.log("result",  result.rowCount);
//   if (result.rowCount === 0) {
//   //   console.log(`Database '${dbName}'successfully checked`);
//   // } else {
//     client.query(`CREATE DATABASE ${dbName};`);
//   }
// }). then(() => {new Sequelize(conStringPost, 
//     {models : [`${__dirname}/models/`], 
//     logging: false
//   }
//     );}
//     // () => { console.log(`Database '${dbName}' create`); }
//      ).catch(console.error);
// }).catch(console.error);


// .then(() = > {client.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`)} ); 



// pg.createConnection({
//     host: process.env.DB_HOST || "127.0.0.1",
//     port: process.env.DB_PORT || "3306",
//     user     : process.env.DB_USER || "root",
//     password : process.env.DB_PASSWORD || "root",
// }).then( connection => {
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
//         console.info("Database create or successfully checked");
//         process.exit(0);
//     })
// })

// export const sequelize = new Sequelize(conStringPost, 
//   {models : [`${__dirname}/models/`], 
//   logging: false
// }
//   );


// async function initializeSequelize() {
//   const client = new pg.Client(conStringPri);
//   await client.connect().
//     then(() => {
//       // console.log(`SELECT 1 FROM pg_catalog.pg_database WHERE datname = '${dbName}';`);
//       return client.query(`SELECT 1 FROM pg_catalog.pg_database WHERE datname = '${dbName}';`);}).
//     then((result) => { 
//       // console.log("result.rowCount", result.rowCount);
//       if (result.rowCount === 0) {
//         // console.log(`CREATE DATABASE "${dbName}";`);
//         client.query(`CREATE DATABASE "${dbName}";`).then(()=>{console.log(`ff CREATE DATABASE "${dbName}";`); }).catch((e) => {console.log("9"); 
//         console.log(e);});
//         return true;
//         }
//   }).
//     then(()=>{ 
//       // client.end();
//       console.log("8");
//      }).catch((e) => {logger.error(`app failed${e}`); return false;}).
//      finally(() => {
//       client.end();                                // closes connection
//      });
  
//     }
  
// initializeSequelize().then((result) => {
//   if (result) {
//       console.log('Database created');
//   });  
  // client.connect()
  //   .then(() => {client.query(`SELECT 1 FROM pg_catalog.pg_database WHERE datname = '${dbName}'`)})
  //   .then((result) => {if (result.rowCount === 0) {
  //     await client.query(`CREATE DATABASE ${dbName};`);
  //    }})
  // if (result.rowCount === 0) {
  //    await client.query(`CREATE DATABASE ${dbName};`);
  //   }
  // const sequelize = new Sequelize(conStringPost, 
  //     {models : [`${__dirname}/models/`], 
  //     logging: false
  //   });
  // await sequelize.sync({alter: true});
  // }

// export initialize;  

  // connect to db
  // const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

  // // init models and add them to the exported db object
  // db.User = require('../users/user.model')(sequelize);

  // sync all models with database
  // await sequelize.sync();
// }

const client = new pg.Client(conStringPri);

const createDatabase = async () => {
  try {
      await client.connect();                            // gets connection
      const result = await client.query(`SELECT 1 FROM pg_catalog.pg_database WHERE datname = '${dbName}'`);
      if (result.rowCount === 0) {
              await client.query(`CREATE DATABASE "${dbName}";`); 
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
    logger.info('Database checked or created');
    process.exit(0);
  }
});