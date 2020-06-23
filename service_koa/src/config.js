import path from 'path';

export const SYSTEM = {
  SERVER_PORT: 8090,
  db_type: 'mysql',
};

export const DB_CONFIG = {
  host: '47.98.144.85', // 服务器地址
  port: 3306, // 数据库端口号
  username: 'root', // 数据库用户名
  password: 'root', // 数据库密码
  database: 'blog', // 数据库名称
  prefix: 'api_', // 默认"api_"
};
