/*
    1. cookie:
    eg：网站点登录，10天内不需要登录，用户名密码存入cookie。
    maxAge：一个数字表示从Date.now()得到的毫秒数（有效时长）；
    singed：Cookie签名值；
    expires cookie：过期的date；
    path cookie：路径，默认是'/';
    domain cookie：域名；
    secure：安全cookie；
    httpOnly：服务器可访问cookie，默认是true；
    overwrite：一个布尔值，表示是否覆盖以前的同名cookie（默认是false），如果是true，同一个请求中设置相同名称的所有
              cookie（不管路径或域，是否在设置此cookie是从set-cookie标头中滤掉）
    2. 查看：Application -> cookies


 */
const Koa  = require('koa');
const app = new Koa();

app.use(async ctx => {
    if(ctx.url === '/yzl'){
        ctx.cookies.set(
            'name','admin',{
                domain:'localhost',
                path:'/yzl',
                maxAge:24*60*60*1000,
                expires:new Date('2019-8-9'),
                httpOnly:false,
                overwrite:false
            }
        );
        ctx.body = 'cookie success';
    }else{
        ctx.body = 'fail';
    }
});
app.listen(3000,() => {
    console.log('server start');
});
