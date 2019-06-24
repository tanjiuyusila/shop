const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const cartSchema = new Schema({
    ID:ObjectId,  //类型
    productId:ObjectId,
    userId:ObjectId,
    createDate:{type:Date,default:Date.now()} //有时区问题，这是格林威治时间
});

mongoose.model('Cart',cartSchema);