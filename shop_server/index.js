const Koa = require('koa');
const app = new Koa();
const {connect,initSchemas} = require('./init.js');

//解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));

//加载路由
const Router = require('koa-router');
let user = require('./controller/user.js');
let router = new Router();
router.use('/user', user.routes());//名字和service.config.js里的名字对应
app.use(router.routes());
app.use(router.allowedMethods());//配置接收get还是post

//connect();
//要先连接完成，再引入schema：所以不能直接调用connect和initSchema
(async () => {
    await connect();
    initSchemas();
})();

app.use(async (ctx) => {
    ctx.body = 'hello shop';
});
app.listen(3000,() =>{
    console.log('server start');
});