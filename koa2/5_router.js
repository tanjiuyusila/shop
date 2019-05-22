const Koa  = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();


router.get('/try',(ctx,next) =>{
    console.log(ctx);
    console.log(next);  //next是套跳转到的地址
    ctx.body = 'TRY';
});
router.get('/test',(ctx,next) =>{
    console.log(ctx);
    console.log(next);  //next是套跳转到的地址
    ctx.body = 'TEST';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async ctx => {

});
app.listen(3000,() => {
    console.log('server start');
});


