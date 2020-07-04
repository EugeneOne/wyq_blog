const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    comment_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: '评论ID',
      field: 'comment_id',
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '发表用户ID',
      field: 'user_id',
    },
    article_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '评论博文ID',
      field: 'article_id',
    },
    comment_like_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '点赞数',
      field: 'comment_like_count',
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '评论日期',
      field: 'comment_date',
    },
    comment_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '评论内容',
      field: 'comment_content',
    },
    parent_comment_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '父评论ID',
      field: 'parent_comment_id',
    },
  };
  const options = {
    tableName: 'blog_comments',
    comment: '',
    indexes: [
      {
        name: 'article_id',
        unique: false,
        type: 'BTREE',
        fields: ['article_id'],
      },
      {
        name: 'comment_date',
        unique: false,
        type: 'BTREE',
        fields: ['comment_date'],
      },
      {
        name: 'parent_comment_id',
        unique: false,
        type: 'BTREE',
        fields: ['parent_comment_id'],
      },
    ],
  };
  const CommentsModel = sequelize.define(
    'blog_comments_model',
    attributes,
    options
  );
  return CommentsModel;
};
