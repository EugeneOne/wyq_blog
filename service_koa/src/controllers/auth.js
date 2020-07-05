// import dayjs from 'dayjs';
import sequelize from '../middleware/db';
import userModel from '../models/users';
import jwt from 'jsonwebtoken';
import { PUBLIC_KEY } from '../config';

const article = {
  login: async (ctx) => {
    const { name, password } = ctx.request.body;
    if (!name || !password) {
      return (ctx.body = {
        code: '000002',
        data: null,
        msg: '参数不合法',
      });
    }
    const result = await userModel(sequelize).findOne({
      user_name: name,
      user_password: password,
    });
    if (result) {
      const token = jwt.sign(
        {
          name: result.user_name,
          _id: result.user_id,
        },
        'PUBLIC_KEY',
        { expiresIn: '2h' }
      );
      ctx.cookies.set('token', token, {
        domain: 'localhost', // 写cookie所在的域名
        path: '/', // 写cookie所在的路径
        maxAge: 10 * 60 * 1000, // cookie有效时长
        expires: new Date('2021-02-15'), // cookie失效时间
        httpOnly: false, // 是否只用于http请求中获取
        overwrite: false, // 是否允许重写
      });
      ctx.body = {
        code: 0,
        msg: '登录成功',
      };
    } else {
      ctx.body = {
        code: 3001,
        msg: '用户名或密码错误',
      };
    }
  },
};

module.exports = article;
