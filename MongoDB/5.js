function getTel() { //随机生成100万条数据，将数据插入数据库里，查出某1条数据时，想看查询时间
    var prefixArr = ['130','131','135','132','186','188','187','155','133','156'];
    //随机取一个
    var tel= prefixArr[parseInt(Math.random()*10)];
    for(var i=0;i<8;i++){
        tel += Math.floor(Math.random()*10);//floor:向下取整
    }
    return tel;
}
// console.log(getTel());
var startTime = (new Date()).getTime();
var db = connect('user');
var tempInfo = [];
for(var i=0;i<10000;i++){
    tempInfo.push({
        loginTime:new Date(),
        tel:getTel()
    })
}
db.tel.insert(tempInfo);
var endTime = (new Date()).getTime() - startTime;
print('run'+ endTime + 'ms');
// 控制台： db.tel.find()
// 下接6：