'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api hi';
  }

  // 获取文章列表和文章类型
  async getArticleList() {
    const sql = 'SELECT article.id as id ,' +
              'article.title as title ,' +
              'article.introduce as introduce ,' +
              "FROM_UNIXTIME(article.addTime, '%Y-%m-%d %H:%i:%s')  as addTime ," +
              'article.view_count as view_count ,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.type_id = type.id';
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }

  // 通过Id获取文章内容
  async getArticleById() {
    const id = this.ctx.query.id || 0;
    const sql = 'SELECT article.id as id ,' +
              'article.title as title ,' +
              'article.introduce as introduce ,' +
              'article.article_content as article_content ,' +
              "FROM_UNIXTIME(article.addTime, '%Y-%m-%d %H:%i:%s')  as addTime ," +
              'article.view_count as view_count ,' +
              'type.typeName as typeName ,' +
              'type.id as typeId ' +
              'FROM article LEFT JOIN type ON article.type_id = type.id ' +
              'WHERE article.id = ' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }

  // 得到类别名称和编号
  async getTypeInfo() {
    const result = await this.app.mysql.select('type');
    this.ctx.body = { data: result };
  }
}

module.exports = HomeController;
