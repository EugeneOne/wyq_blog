import KoaRouter from 'koa-router';
import controllers from '../controllers';

const router = new KoaRouter();

router
  .get('/', async (ctx, next) => {
    ctx.body = 'hello world';
  })
  // 登录
  .post('/api/blog/login', controllers.login)
  .get('/home', controllers.homePage)
  // 新增、编辑文章
  .post('/api/blog/edit-article', controllers.editArticle);

export default router;
