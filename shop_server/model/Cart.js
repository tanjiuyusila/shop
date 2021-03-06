const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const cartSchema = new Schema({
    ID:ObjectId,  //类型
    productId:{
        type:ObjectId,
        ref:'Product',  //指向联合查询的model
    },
    userId:ObjectId,
    createDate:{type:Date,default:Date.now()} //有时区问题，这是格林威治时间
});

mongoose.model('Cart',cartSchema);