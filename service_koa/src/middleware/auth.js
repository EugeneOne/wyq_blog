import jwt from 'koa-jwt';
import { PUBLIC_KEY } from '../config';

export default async (app) => {
  app.use(
    jwt({ secret: PUBLIC_KEY }).unless({
      path: [/^\/public|\/user\/login|\/assets/],
    })
  );
};
