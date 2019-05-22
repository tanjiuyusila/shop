/*
async function timeout() {
    return '1'
}
//1. async返回值
//console.log(timeout());//Promise { '1' }  返回的是一个promise对象
//2. 返回promise对象，意味着可以then方法，先输出2再输出1 ，因为async是异步
timeout().then(res => {
    console.log(res);
});
console.log('2');
*/

//3. 如果想先输出异步，再输出同步，
function timeout() {
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(1);
            resolve();
        },2000)
    })
}
async function fn() {
    await timeout();
    console.log(2)
}
fn();