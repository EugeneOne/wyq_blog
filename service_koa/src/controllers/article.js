import dayjs from 'dayjs';
import articlesModel from '../models/articles';
import sequelize from '../middleware/db';
let data = {};
const article = {
  editArticle: async (ctx) => {
    let { title, content, userId = 1, id } = ctx.request.body;
    let brief = content.substring(100);
    let update_time = dayjs().format('YYYY-MM-DD hh:mm:ss');
    // 有id时为修改，没有时为新增
    console.log('userId:', userId);
    if (!id) {
      await articlesModel(sequelize).create({
        article_title: title,
        article_content: content,
        user_id: userId,
        article_views: 1,
        article_comment_count: 1,
        article_like_count: 1,
        update_date: update_time,
      });
    } else {
      const articleId = Number(id);
      // 更新文章
      await articlesModel(sequelize).update(
        {
          article_content: content,
        },
        {
          where: {
            article_id: articleId,
          },
        }
      );
    }
    ctx.body = {
      code: 0,
      msg: 'success',
    };
  },
  getArticle: async (ctx) => {
    let { pageNo = 1, pageSize = 20, id } = ctx.request.body;
    let result = [];
    if (!id) {
      // 分页查询  offset: 偏移量；limit: 内容长度限制
      result = await articlesModel(sequelize).findAll({
        offset: (pageNo - 1) * pageSize,
        limit: pageSize,
      });
      Object.assign(data, { articleList: result });
    }
    ctx.body = {
      code: 0,
      data,
      msg: 'success',
    };
  },
};

module.exports = article;
