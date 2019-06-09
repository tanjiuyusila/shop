//集合,和数据库打交道
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');//

//MVC中的Model，对应这数据库中的表（在mongoDB这种数据库称作集合），每一个属性，对应着mongoDB中的key，
const userSchema = new Schema({  //每一个属性对应着集合中的字段名称
    userId: Schema.Types.ObjectId,
    userName: { unique: true, type: String },
    password: String,
    createDate: { type: Date, default: Date.now() }
});
//加盐加密
userSchema.pre('save',function (next){  //next:调用next进行下一步,不写箭头函数，

    bcrypt.genSalt(10,(err,salt) => { //随机生成盐；10：盐的迭代次数；
        if(err) return next(err);  //生成盐的时候发生错误了，执行下段代码
        // console.log(this);
        bcrypt.hash(this.password,salt,(err,hash) => {
            // console.log(this);
            // 参数：对谁加盐，加的参数，hash：加盐成功，hash值就是加盐完成之后的值
            if(err) return next(err);
            this.password = hash;  //this指代当前模型，即这个模型中的password
            next();
        })
    });
});

// 定义方法
userSchema.methods = {
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject) => {
            bcrypt.compare(_password,password,(err,isMatch) => {
                if(!err) resolve(isMatch);
                else reject(err)
            })
        })
    }
};




//发布模型
mongoose.model('User',userSchema);//发布时的模型名字叫做User，所以user.js中引用模型，就用这个名字

