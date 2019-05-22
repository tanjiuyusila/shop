const Koa  = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();

router.get('/try',(ctx,next) =>{
    ctx.body = ctx.query;  //和之前一样
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async ctx => {

});
app.listen(3000,() => {
    console.log('server start');
});


