const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: '标识ID',
      field: 'id',
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户ID',
      field: 'user_id',
    },
    user_friends_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '好友ID',
      field: 'user_friends_id',
    },
    user_note: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '好友备注',
      field: 'user_note',
    },
    user_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '好友状态',
      field: 'user_status',
    },
  };
  const options = {
    tableName: 'blog_user_friends',
    comment: '',
    indexes: [
      {
        name: 'user_id',
        unique: false,
        type: 'BTREE',
        fields: ['user_id'],
      },
    ],
  };
  const UserFriendsModel = sequelize.define(
    'blog_user_friends_model',
    attributes,
    options
  );
  return UserFriendsModel;
};
