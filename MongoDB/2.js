var user1 = {
    name:'yaozhilin',
    age:25,
    hobby:['唱歌','看书','滑冰'],
    pc:{
        brand:'华硕',
        price:5000
    }
};
var user2 = {
    name:'songli',
    age:48,
    hobby:['喝咖啡','看小说','逛街'],
    pc:{
        brand:'acer',
        price:3000
    }
};
var user3 = {
    name:'alian',
    age:75,
    hobby:['吃甜品','养花']
};
//将以上三条数据链接数据库
    var db = connect('user');
//插入
    db.user.insert([user1,user2,user3]);
    print('insert success 3 data');

/* update
更新数据库
控制台：db.user.update({name:"yaozhilin"},{age:26})将name为yaozhilin的数据更新成什么样子，即该条数据只剩一个age
$set: db.user.update({name:'yaozhilin'},{$set:{age:26}})//修改指定的key值
$unset:db.user.update({name:'yaozhilin'},{$unset:{'hobby':''}}) //删掉爱好这个属性
$upsert:  db.user.update({name:'yaozhilin'},{$set:{'sister':'yaozhiyu'}},{upsert:true})
multi:db.user.update({},{$set:{eat:['burger']}},{multi:true})；不加true只有第一条数据会加
$push:db.user.update({name:'alian'},{$push:{eat:'icecream'}})
$addToSet:db.user.update({name:'alian'},{$addToSet:{eat:'fish'}})
$set:db.user.update({name:'alian'},{$set:{'hobby.0':'遛弯'}})//修改hobby的第一个值
$find

*/
/* find
    db.user.find({name:'alian'})
    //找到年龄大于等于20小于等于50的 $lt,$gt,$lte,$gte
        db.user.find(
            {age:{$gte:20,$lte:50}},//筛选条件
            {name:true,age:true,_id:false} //选择那些字段
        );
    // $in //精确字段
        db.user.find(
        {age:{$in:[25,48]}},//准确查找
        {name:true,age:true,_id:false}
        );
    // $or ,$and ,$not//与或非
        db.user.find({  //第一个参数是对象
        $or:[    //或的查询条件
            {age:{$gte:60}},
            {'pc.brand':'华硕'}
        ]},
        {name:true,age:true,_id:false}
        );

//数组查询
    db.user.find(
 // {hobby:['滑冰'] },//这么写是只包括篮球
    {hobby:'滑冰' },//只要有这个值就能被查到
    {name:true,age:true,_id:false}
    ）;
        $all  //满足所有条件的
            db.user.find(
            //{hobby:['滑冰','] },
            {hobby:{$all:['滑冰','养花']}},//  都有的的
            {name:true,age:true,_id:false}
            );
         $in   //满足一个即可
            db.user.find(
            {hobby:{$in:['滑冰','养花']}},
            {name:true,age:true,_id:false}
            );
         $size:  //根据数据个数
            db.user.find(
            {hobby:{$size:2}},
            {name:true,age:true,_id:false}
            );

// 分页
    limit；skip；sort；
    db.user.find(
    {},
    {name:true,age:true,_id:false}
    ).limit(1).skip(1).sort({age:-1});//查询一条，跳过1个数据，年龄降序排列，查出年龄最大的

//js.forEach
 */

