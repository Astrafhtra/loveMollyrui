// 满足如下代码，要求在不使用promise的情况洗啊
var fn1 = function(a, cb){
  setTimeout(()=>cb(a + 2), 300)
}
var fn2 = function(a, cb){
  setTimeout(()=>cb(a + 3), 200)
}
var fn3 = function(a, cb){
  setTimeout(()=>cb(a * 2), 100)
}
var fnArr = [fn1, fn2, fn3];
run(1, fnArr, function(res){
  console.log(res) // 这里会打印出12。// 12 = (1+2+3)*2
})
//要求不使用promise
function run(initValue, fnArr, cb){
    const addSum = async (res) => {
        if(fnArr.length === 0) return
        if(fnArr.length === 1) {
            await fnArr[0](res, cb)
        }
        await fnArr[0](res, addSum)
        fnArr = fnArr.slice(1)
    }
    fnArr[0](initValue, addSum)
    fnArr = fnArr.slice(1)
}