//控制器路由，service.config.js里面，定义的url，接收前端发送的请求
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

//写控制器方法
router.post('/registUser', async (ctx) => { //和service.config.js里面一致
    // console.log('请求成功');
    // ctx.body = '请求成功';
    //获取model
    const User = mongoose.model('User');
    let newUser = new User(ctx.request.body);//接收post请求，封装成user对象，body中包含用户名密码

    await newUser.save().then(() =>{ //使用save保存用户信息到数据库
        ctx.body = {
            code:200,
            message:'注册成功'
        }
    }).catch(err => {
        ctx.body = {
            code:500,
            message:err
        }
    })
});

router.post('/loginUser',async (ctx) => {
    //接收前端发送的数据
    let loginUser = ctx.request.body;//request.body是因为在index.js中，写了一个app.use(bodyParser());
    let userName = loginUser.userName;
    let password = loginUser.password;
    //引入model
    const User = mongoose.model('User');
    // 比对
    //     用户名是否存在，存在再去比较密码
    await User.findOne({userName:userName}).exec().then(async (result) => {
        if(result){ //返回一个对象
            let newUser = new User();  //写在模型中的方法是实例化方法，要new一个
            await newUser.comparePassword(password,result.password) //模型定义的时候，返回一个promse对象，可以.then
                .then(isMatch => {
                    if(isMatch){ //成功
                        ctx.body = {
                            code:200,
                            message:'登陆成功'
                        }
                    }else{  //失败
                        ctx.body = {
                            code:201,
                            message:'登陆失败'
                        }
                    }
                });
        }else{
            ctx.body = {
                code:201,
                message: '用户名不存在'
            }
        }
    })

});

module.exports = router;
