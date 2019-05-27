var userName = 'yaozhilin';
var time = Date.parse(new Date());
var data = {
    "username":userName,
    "regTime":time
};
var db = connect('shop');
db.user.insert(data);
print('insert success');

//执行js文件：load