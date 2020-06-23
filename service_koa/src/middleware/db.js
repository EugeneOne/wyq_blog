import { DB_CONFIG as DBconfig, SYSTEM as SystemConfig } from '../config';
import Sequelize from 'sequelize';

console.log('SystemConfig.db_type：', SystemConfig.db_type, DBconfig.database);

const sequelize = new Sequelize(
  DBconfig.database,
  DBconfig.username,
  DBconfig.password,
  {
    host: DBconfig.host,
    dialect: SystemConfig.db_type,
    dialectOptions: {
      // MySQL > 5.5，其它数据库删除此项
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_520_ci',
      supportBigNumbers: true,
      bigNumberStrings: true,
      db_type: 'mysql', // 数据库类型
    },
    pool: {
      max: 50,
      min: 0,
      idle: 10000,
    },
  }
);

export default async (app) => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
};
