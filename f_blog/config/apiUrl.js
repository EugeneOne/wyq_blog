let ipUrl = 'http://127.0.0.1:7001/default/';

let servicePath = {
    getArticleList: ipUrl + 'getArticleList',   // 首页接口
    getArticleById: ipUrl + 'getArticleById',    // 详情页
    getTypeInfo: ipUrl + 'getTypeInfo',    // 获取文章类别
}

export default servicePath;