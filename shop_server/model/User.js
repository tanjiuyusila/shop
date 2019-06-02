//集合,和数据库打交道
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//MVC中的Model，对应这数据库中的表（在mongoDB这种数据库称作集合），每一个属性，对应着mongoDB中的key，
const userSchema = new Schema({  //每一个属性对应着集合中的字段名称
    userId: Schema.Types.ObjectId,
    userName: { unique: true, type: String },
    password: String,
    createDate: { type: Date, default: Date.now() }
});
//发布模型
mongoose.model('User',userSchema);//发布时的模型名字叫做User，所以user.js中引用模型，就用这个名字