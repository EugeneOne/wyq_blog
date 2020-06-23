import KoaRouter from 'koa-router';
import controllers from '../controllers';

const router = new KoaRouter();

router.get('/', async (ctx, next) => {
  ctx.body = 'hello world';
});

router.get('/home', controllers.homePage);

export default router;
