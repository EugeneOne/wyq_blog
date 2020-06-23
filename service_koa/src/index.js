require('@babel/register');

import Koa2 from 'koa';
import middleware from './middleware';

const app = new Koa2();
const env = process.env.NODE_ENV || 'development'; // Current mode

middleware.bodyParse(app);

middleware.db(app);

middleware.router(app);

middleware.listen(app);

export default app;
