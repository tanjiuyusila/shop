const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    let data = ''; // 用于叠加post请求发过来的数据
    ctx.req.on('data',chunk => {  // 监听data事件。收到表单数据时执行
        console.log(chunk);//<Buffer 75 73 65 72 6e 61 6d 65 3d 35 32 31 31 39 36 37 34 38 25 34 30 71 71 2e 63 6f 6d 26 70 61 73 73 77 6f 72 64 3d 31 31 31>
        data += chunk;  // chunk是二进制数据,二进制和字符串进行+=，其实是执行了一个toString函数，转化成字符串
    });
    ctx.req.on('end',() => {  // 接收表单数据完成后
        data = decodeURI(data);
        console.log(data)  // username=521196748%40qq.com&password=111,还要解析字符串，比较麻烦，引入koa-bodyparser
    });
    ctx.body = '123'  //必须写，否则会报404
});
app.listen(3000,() => {
    console.log('server start at port 3000')
});