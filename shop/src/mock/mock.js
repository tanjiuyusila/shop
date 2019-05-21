import Mock from 'mockjs'
import data from './data.json'

/* mock简介
// 第1种方式（基本方式，但是不够灵活）
Mock.mock('http://www.a.com/getList',{data:data.list}); //url地址，mock
// mock第2种方式
Mock.mock('http://www.a.com/getUser',{  //发送请求之后，mock会把请求拦截下来，将对象里的内容返回给前端
  'name|2':'yaozhilin',//name属性后面的2：表示重复两次
  'age|18-35':20  //18-35表示生成18-35的随机数。冒号后面的20表示数据类型而已
});
// mock第3种方式,正则表达式
Mock.mock("http://www.a.com/regxp",{
  'regxp1':/[a-z][A-Z][0-9]/,
  'regxp2':/\d(5,10)/
});
//mock第4种方式,占位符
Mock.mock("http://www.a.com/list",{
  'info|10-20':[
    {
    'index|+1':1,
    'name':'@first @last',
    'id':'@integer(10000,99999)',
    'date':'@datetime',
    'img':'@image("200*200")',
    'text':'@sentence(6,22)'
  }
  ]
});
*/
//随机生成推荐商品
  let Random = Mock.Random;
  let productData = res => {
    let productList = [];  //存放商品信息数组
    for(let i=0;i<100;i++){
      let product = {
        name:Random.ctitle(5,20),
        img:Random.dataImage('100x100','商品'+Random.integer(1,100)),  //生成的图片是一个个色块，base64格式的
        price:Random.integer(1000,10000),
        owner:Random.cname(),
      };
      productList.push(product);
    }
    return productList;
  };
  Mock.mock('http://www.shop.com/getVarietyItem',productData);
