/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 06/09/2019 23:14:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for zj_articles
-- ----------------------------
DROP TABLE IF EXISTS `zj_articles`;
CREATE TABLE `zj_articles`  (
  `article_id` bigint(255) NOT NULL AUTO_INCREMENT COMMENT '博文ID',
  `user_id` bigint(20) NOT NULL COMMENT '发表用户ID',
  `article_title` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '博文标题',
  `article_content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '博文内容',
  `article_views` bigint(20) NOT NULL COMMENT '浏览量',
  `article_comment_count` bigint(20) NOT NULL COMMENT '评论总数',
  `article_date` datetime(0) NULL DEFAULT NULL COMMENT '发表时间',
  `article_like_count` bigint(20) NOT NULL,
  PRIMARY KEY (`article_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `zj_articles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `zj_users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zj_comments
-- ----------------------------
DROP TABLE IF EXISTS `zj_comments`;
CREATE TABLE `zj_comments`  (
  `comment_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '评论ID',
  `user_id` bigint(20) NOT NULL COMMENT '发表用户ID',
  `article_id` bigint(20) NOT NULL COMMENT '评论博文ID',
  `comment_like_count` bigint(20) NOT NULL COMMENT '点赞数',
  `comment_date` datetime(0) NULL DEFAULT NULL COMMENT '评论日期',
  `comment_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论内容',
  `parent_comment_id` bigint(20) NOT NULL COMMENT '父评论ID',
  PRIMARY KEY (`comment_id`) USING BTREE,
  INDEX `article_id`(`article_id`) USING BTREE,
  INDEX `comment_date`(`comment_date`) USING BTREE,
  INDEX `parent_comment_id`(`parent_comment_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zj_labels
-- ----------------------------
DROP TABLE IF EXISTS `zj_labels`;
CREATE TABLE `zj_labels`  (
  `label_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '标签ID',
  `label_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标签名称',
  `label_alias` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标签别名',
  `label_description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标签描述',
  PRIMARY KEY (`label_id`) USING BTREE,
  INDEX `label_name`(`label_name`) USING BTREE,
  INDEX `label_alias`(`label_alias`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zj_set_artitle_label
-- ----------------------------
DROP TABLE IF EXISTS `zj_set_artitle_label`;
CREATE TABLE `zj_set_artitle_label`  (
  `article_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '文章ID',
  `label_id` bigint(20) NOT NULL,
  PRIMARY KEY (`article_id`) USING BTREE,
  INDEX `label_id`(`label_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zj_set_artitle_sort
-- ----------------------------
DROP TABLE IF EXISTS `zj_set_artitle_sort`;
CREATE TABLE `zj_set_artitle_sort`  (
  `article_id` bigint(20) NOT NULL COMMENT '文章ID',
  `sort_id` bigint(20) NOT NULL COMMENT '分类ID',
  PRIMARY KEY (`article_id`, `sort_id`) USING BTREE,
  INDEX `sort_id`(`sort_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zj_sorts
-- ----------------------------
DROP TABLE IF EXISTS `zj_sorts`;
CREATE TABLE `zj_sorts`  (
  `sort_id` bigint(20) NOT NULL COMMENT '分类ID',
  `sort_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '分类名称',
  `sort_alias` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '分类别名',
  `sort_description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '分类描述',
  `parent_sort_id` bigint(20) NOT NULL COMMENT '父分类ID',
  PRIMARY KEY (`sort_id`) USING BTREE,
  INDEX `sort_name`(`sort_name`) USING BTREE,
  INDEX `sort_alias`(`sort_alias`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zj_user_friends
-- ----------------------------
DROP TABLE IF EXISTS `zj_user_friends`;
CREATE TABLE `zj_user_friends`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '标识ID',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `user_friends_id` bigint(20) NOT NULL COMMENT '好友ID',
  `user_note` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '好友备注',
  `user_status` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '好友状态',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zj_users
-- ----------------------------
DROP TABLE IF EXISTS `zj_users`;
CREATE TABLE `zj_users`  (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `user_ip` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户IP',
  `user_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `user_password` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户密码',
  `user_email` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户邮箱',
  `user_profile_photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户头像',
  `user_registration_time` datetime(0) NULL DEFAULT NULL COMMENT '注册时间',
  `user_birthday` date NULL DEFAULT NULL COMMENT '用户生日',
  `user_age` tinyint(4) NULL DEFAULT NULL COMMENT '用户年龄',
  `user_telephone_number` int(11) NOT NULL COMMENT '用户手机号',
  `user_nickname` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户昵称',
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `user_name`(`user_name`) USING BTREE,
  INDEX `user_nickname`(`user_nickname`) USING BTREE,
  INDEX `user_email`(`user_email`) USING BTREE,
  INDEX `user_telephone_number`(`user_telephone_number`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
