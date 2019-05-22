const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

app.use(bodyparser());
app.use(async ctx =>{
    let data = ctx.request.body; //{"username":"admin","password":"12345"}
    ctx.body = data;
});

app.listen(3000,() => {
    console.log('server start')
});