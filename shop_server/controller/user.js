//控制器路由，service.config.js里面，定义的url，接收前端发送的请求
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/registUser', async (ctx) => {
    console.log('请求成功');
    ctx.body = '请求成功';
});//和service.config.js里面一致
module.exports = router;
