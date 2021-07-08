/**
 * promise是ES6提供的异步编程的解决方案,本事是一个构造函数
 * pending(进行中),resolved(已完成),reject(已失败)
 */

 // 解决回调地狱问题,早期异步网络请求无限套娃
 // 代码臃肿可读性差,只能在回调里处理异常
 ``````js
  请求1(function(请求结果1){
    请求2(function(请求结果2){
        请求3(function(请求结果3){
            请求4(function(请求结果4){
                请求5(function(请求结果5){
                    请求6(function(请求结果3){
                        ...
                    })
                })
            })
        })
    })
})
 ```````

- 基本用法
  ``````js
  let promise = new Promise((resolve,reject)=>{
    resolve();
  }).then(res=>{
    console.log(res)
  })
  .then(function(){})
  ``````````
  - promise.resolve() // 成功状态
  - promise.reject() // 失败状态
  
