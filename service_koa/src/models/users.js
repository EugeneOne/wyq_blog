const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: '用户ID',
      field: 'user_id',
    },
    user_ip: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户IP',
      field: 'user_ip',
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户名',
      field: 'user_name',
    },
    user_password: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户密码',
      field: 'user_password',
    },
    user_email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户邮箱',
      field: 'user_email',
    },
    user_profile_photo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户头像',
      field: 'user_profile_photo',
    },
    user_registration_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '注册时间',
      field: 'user_registration_time',
    },
    user_birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户生日',
      field: 'user_birthday',
    },
    user_age: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户年龄',
      field: 'user_age',
    },
    user_telephone_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户手机号',
      field: 'user_telephone_number',
    },
    user_nickname: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: '用户昵称',
      field: 'user_nickname',
    },
  };
  const options = {
    tableName: 'blog_users',
    comment: '',
    indexes: [
      {
        name: 'user_name',
        unique: false,
        type: 'BTREE',
        fields: ['user_name'],
      },
      {
        name: 'user_nickname',
        unique: false,
        type: 'BTREE',
        fields: ['user_nickname'],
      },
      {
        name: 'user_email',
        unique: false,
        type: 'BTREE',
        fields: ['user_email'],
      },
      {
        name: 'user_telephone_number',
        unique: false,
        type: 'BTREE',
        fields: ['user_telephone_number'],
      },
    ],
  };
  const UsersModel = sequelize.define('blog_users_model', attributes, options);
  return UsersModel;
};
