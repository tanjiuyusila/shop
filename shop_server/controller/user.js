//控制器路由，service.config.js里面，定义的url，接收前端发送的请求
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/registUser', async (ctx) => { //和service.config.js里面一致
    // console.log('请求成功');
    // ctx.body = '请求成功';
    //获取model
    const User = mongoose.model('User');
    let newUser = new User(ctx.request.body);//接收post请求，封装成user对象，body中包含用户名密码

    await newUser.save().then(() =>{ //使用save保存用户信息到数据库
        ctx.body = {
            code:200,
            nessage:'注册成功'
        }
    }).catch(err => {
        ctx.body = {
            code:500,
            message:err
        }
    })
});
module.exports = router;
