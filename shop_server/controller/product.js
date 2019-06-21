const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs');

router.get('/insertProductInfo',async (ctx) => {
    fs.readFile('./data/product.json','utf-8',(err,data) => {
        data = JSON.parse(data);
        console.log(data);
        let count = 0; //计数器，数据条数
        const Product = mongoose.model('Product'); //引入模型
        data.map((value,index) => {
            console.log(value);
            let product = new Product(value);
            product.type = Math.floor(Math.random()*8)+1;
            product.save().then(() => {
                count++;
                console.log('成功'+count)
            }).catch(err => {
                console.log('失败：'+err)
            })
        });
    });
    ctx.body = '导入数据';
});
router.get('/getProductsByType', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.find({ type : ctx.query.typeId }).skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then( res => {
        ctx.body = res;
    })
});


module.exports = router;