const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    label_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: '标签ID',
      field: 'label_id',
    },
    label_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '标签名称',
      field: 'label_name',
    },
    label_alias: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '标签别名',
      field: 'label_alias',
    },
    label_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '标签描述',
      field: 'label_description',
    },
  };
  const options = {
    tableName: 'blog_labels',
    comment: '',
    indexes: [
      {
        name: 'label_name',
        unique: false,
        type: 'BTREE',
        fields: ['label_name'],
      },
      {
        name: 'label_alias',
        unique: false,
        type: 'BTREE',
        fields: ['label_alias'],
      },
    ],
  };
  const LabelsModel = sequelize.define(
    'blog_labels_model',
    attributes,
    options
  );
  return LabelsModel;
};
