const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    let url = ctx.url;//{"url":"/?name=yaozhilin&age=24",
    let query = ctx.query;//"query":{"name":"yaozhilin","age":"24"},返回的是格式化好的参数对象
    let queryString = ctx.querystring;//"queryString":"name=yaozhilin&age=24"}，返回的是请求字符串

    ctx.body = {
        url,    //{"url":"/"}
        query,
        queryString
    }
});
app.listen(3000,() => {
    console.log('server start at port 3000')
});