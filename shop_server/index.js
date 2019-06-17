const Koa = require('koa');
const app = new Koa();
const {connect,initSchemas} = require('./init.js');

//解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));

//接收前端post请求
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
    //存入数据库在cotroller - user.js


//加载路由
const Router = require('koa-router');
let user = require('./controller/user.js');
let product = require('./controller/product.js');
let type = require('./controller/type.js');

let router = new Router();
router.use('/user', user.routes());//名字和service.config.js里的名字对应
router.use('/product', product.routes());//名字和service.config.js里的名字对应
router.use('/type', type.routes());//名字和service.config.js里的名字对应
app.use(router.routes());
app.use(router.allowedMethods());//配置接收get还是post


//要先连接完成，再引入schema：所以不能直接调用connect和initSchema
//connect();
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