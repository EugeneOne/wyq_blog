import dayjs from 'dayjs';
import articlesModel from '../models/articles';
import sequelize from '../middleware/db';

const article = {
  editArticle: async (ctx) => {
    let { title, content, userId, id } = ctx.request.body;
    let brief = content.substring(100);
    let update_time = dayjs().format('YYYY-MM-DD hh:mm:ss');
    // 有id时为修改，没有时为新增
    console.log('userId:', userId);
    if (!id) {
      articlesModel(sequelize).create({
        article_title: title,
        article_content: content,
        user_id: userId,
        article_views: 1,
        article_comment_count: 1,
        article_like_count: 1,
        update_date: update_time,
      });
    }
    ctx.body = {
      code: 200,
      msg: 'success',
    };
  },
};

module.exports = article;
