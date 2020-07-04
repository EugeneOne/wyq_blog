const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    article_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: '文章ID',
      field: 'article_id',
    },
    sort_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: '分类ID',
      field: 'sort_id',
    },
  };
  const options = {
    tableName: 'blog_set_artitle_sort',
    comment: '',
    indexes: [
      {
        name: 'sort_id',
        unique: false,
        type: 'BTREE',
        fields: ['sort_id'],
      },
    ],
  };
  const SetArtitleSortModel = sequelize.define(
    'blog_set_artitle_sort_model',
    attributes,
    options
  );
  return SetArtitleSortModel;
};
