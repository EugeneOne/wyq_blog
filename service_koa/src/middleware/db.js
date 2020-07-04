import { DB_CONFIG as DB, SYSTEM as SystemConfig } from '../config';
import Sequelize from 'sequelize';

const ENV = process.env.NODE_ENV;
const DBconfig = DB[ENV];

console.log('DBconfig.host：', DBconfig.host);

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
    define: {
      timestamps: false,
    },
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
