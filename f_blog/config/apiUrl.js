let ipUrl = 'http://47.98.144.85:9999/mock/11';
// let ipUrl = '';

/**
 * @wiki http://47.98.144.85:9999/project/11/interface/api/cat_35
 */

let servicePath = {
    getArticleList: ipUrl + '/getArticleList',   // 首页接口
    getArticleById: ipUrl + '/article/detail',    // 详情页
    getTypeInfo: ipUrl + '/getTypeInfo',    // 获取文章类别
    userInfo: ipUrl + '/user/info',     // 用户信息
}

export default servicePath;