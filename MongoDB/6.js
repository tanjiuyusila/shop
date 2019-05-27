//查出电话号为18620163950的时间

var startTime = (new Date()).getTime();
var db = connect('user');

var res = db.tel.find({tel:'18620163950'});
res.forEach(data => printjson(data));

var runTime = (new Date()).getTime() - startTime;
print('run'+ runTime + 'ms');

//建立索引，加快查询速度,但是需要占用空间，索引场景：当前某一个字段需要频繁查询，建立要求：
db.tel.ensureIndex({tel:1});
//获取索引
db.tel.getIndexes();
//删除索引
db.tel.dropIndex({tel:1});