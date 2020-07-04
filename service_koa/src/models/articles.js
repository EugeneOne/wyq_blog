const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    article_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: '博文ID',
      field: 'article_id',
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '发表用户ID',
      field: 'user_id',
      references: {
        key: 'user_id',
        model: 'blog_users_model',
      },
    },
    article_title: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '博文标题',
      field: 'article_title',
    },
    article_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '博文内容',
      field: 'article_content',
    },
    article_views: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '浏览量',
      field: 'article_views',
    },
    article_comment_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '评论总数',
      field: 'article_comment_count',
    },
    article_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '发表时间',
      field: 'article_date',
    },
    article_like_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: 'article_like_count',
    },
  };
  const options = {
    tableName: 'blog_articles',
    comment: '',
    indexes: [
      {
        name: 'user_id',
        unique: false,
        type: 'BTREE',
        fields: ['user_id'],
      },
    ],
    timestamps: false,
  };
  const ArticlesModel = sequelize.define(
    'blog_articles_model',
    attributes,
    options
  );
  return ArticlesModel;
};
