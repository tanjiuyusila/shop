const MOCKURL = 'http://www.shop.com/';  //mock模拟的url
const SERVERURL = 'http://localhost:3000/';//真实url


const URL = {
  getVarietyItem:MOCKURL + 'getVarietyItem',
  getHotProduct:MOCKURL + 'getVarietyItem',
  registUser:SERVERURL + 'user/registUser',//在user的控制器里面，对应的registUser方法
  loginUser:SERVERURL + 'user/loginUser',//在user的控制器里面，对应的loginUser方法
  getTypes: SERVERURL + 'type/getTypes',
  getProductsByType: SERVERURL + 'product/getProductsByType',
  getDetail: SERVERURL + 'product/getDetail',
  addCart:SERVERURL + 'cart/addCart',
  getCart:SERVERURL + 'cart/getCart',
};
export default URL;
