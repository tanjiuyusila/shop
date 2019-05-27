/*$each:把多个数据插入到数组中
var newHobby = ['王者','阴阳师'];
db.user.update({name:'alian'},{$addToSet:{hobby:{$each:newHobby}}});
*/
//应答式
var modify = {
    findAndModify:'user',//user.集合名称
    query:{name:'yaozhilin'},
    update:{$set:{age:3}},
    new:true        //true返回修改之后的结果，false返回修改之前的结果
};
var res = db.runCommand(modify);
printjson(res);