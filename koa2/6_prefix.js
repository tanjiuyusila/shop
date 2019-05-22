const Koa  = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router({
    prefix:'/a'
});

//需求：项目扩充，地址从：3000/try改成：3000/a/try，加了一个前缀,只要在router中加一个prefix；
router.get('/try',(ctx,next) =>{
    ctx.body = 'TRY';
});
router.get('/test',(ctx,next) =>{

    ctx.body = 'TEST';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async ctx => {

});
app.listen(3000,() => {
    console.log('server start');
});


