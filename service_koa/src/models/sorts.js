const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    sort_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: '分类ID',
      field: 'sort_id',
    },
    sort_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '分类名称',
      field: 'sort_name',
    },
    sort_alias: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '分类别名',
      field: 'sort_alias',
    },
    sort_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '分类描述',
      field: 'sort_description',
    },
    parent_sort_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '父分类ID',
      field: 'parent_sort_id',
    },
  };
  const options = {
    tableName: 'blog_sorts',
    comment: '',
    indexes: [
      {
        name: 'sort_name',
        unique: false,
        type: 'BTREE',
        fields: ['sort_name'],
      },
      {
        name: 'sort_alias',
        unique: false,
        type: 'BTREE',
        fields: ['sort_alias'],
      },
    ],
  };
  const SortsModel = sequelize.define('blog_sorts_model', attributes, options);
  return SortsModel;
};
