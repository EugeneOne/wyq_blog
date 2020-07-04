const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    article_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: '文章ID',
      field: 'article_id',
    },
    label_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: 'label_id',
    },
  };
  const options = {
    tableName: 'blog_set_artitle_label',
    comment: '',
    indexes: [
      {
        name: 'label_id',
        unique: false,
        type: 'BTREE',
        fields: ['label_id'],
      },
    ],
  };
  const SetArtitleLabelModel = sequelize.define(
    'blog_set_artitle_label_model',
    attributes,
    options
  );
  return SetArtitleLabelModel;
};
