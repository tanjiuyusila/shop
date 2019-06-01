//初始化，连接数据库
const mongoose = require('mongoose');
const db = 'mongodb://localhost/shop';//默认27017

//引入模型schema
const glob = require('glob');
const path = require('path');

//链接数据库
exports.connect = () => {
    mongoose.connect(db, { useNewUrlParser: true });//连接数据库
    //监听到没连接上
    mongoose.connection.on('disconnected', () => {
        mongoose.connect(db);//大型项目可以考虑在链接失败的函数里做一个计数器，三次给提示
    });
    //数据库监听到错误
    mongoose.connection.on('error',err => {
        console.log(err);
        mongoose.connect(db);
    });
    //连接成功
    mongoose.connection.once('open',()=>{
        console.log('mongoDB connected')
    });

};

//导出初始化schema
exports.initSchemas = () => {
    glob.sync(path.resolve(__dirname, './model', '*.js')).forEach(require);//获取绝对地址
};


