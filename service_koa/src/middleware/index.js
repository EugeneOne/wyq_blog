import bodyParse from './body-parse';
import router from './router';
import auth from './auth';
import listen from './listen';
import db from './db';
import errHandler from './errHandler';

export default {
  bodyParse,
  db,
  auth,
  errHandler,
  router,
  listen,
};
