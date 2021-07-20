const arr = [1, 4, 9];
const newArr = arr.map((x) => {
  return x + this.a
}, {
  a: 1
});
console.log(newArr); //[NaN,NaN,NaN] 箭头函数指向


// ----------------------------------------

// window.name = 'shopee'
function A(){
  this.name = 123
  console.log(this.name)
}
A.prototype.getA = function(){
  console.log(this);
  return this.name +1;
}
let a = new A();
let funcA = a.getA;
funcA(); // shopee1

// -------------------------------------------------
var p1 = new Promise(function(res,rej){
  console.log('promise 1')
  res()
})
setTimeout(function(){
 console.log('setTime0')
})
var p2 = new Promise(function(res,rej){
  setTimeout(()=>{
    res(1)
  },0)
})
setTimeout(function(){
  console.log('setTime1')
})
for(let i = 0;i<3;i++){
  p2.then(function(val){
      console.log('promise then -' + i)
  })
}
// Promise.resolve.then(()=>{
//   console.log('promise then')
// })
p1.then(function(){
  console.log('promise 1 resolved')
})
console.log('finished')
// promise 1 => finished => promise then 1 resovled => setTimeout0 => setTimeout1 => promise then -0 => promise then -1 => promise then -2