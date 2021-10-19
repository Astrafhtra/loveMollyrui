/**
 * 每隔着一段时间触发一次
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
// 时间戳写法 第一次立即执行,最后一次不触发
const dateThrottle = function (fn,delay){
  var start = 0;
  return function(){
    var self = this;
    var curTime = Date.now()
    if(curTime - start > delay){
      fn.apply(self,arguments);
      start = curTime;
    }
  }
}

// 定时器写法 第一次不会触发,最后一次会触发
const throttle = function (fn,delay){
  let timer = null;
  return function (){
    let args = arguments;
    if(!timer){
      timer = setTimeout(function(){
        fn.apply(this,args);
        timer = null; 
      },delay)
    }
  }
}

// 时间戳和定时器结合,第一次不立即执行,最后一次立即执行
const throttle2 = function (fn,delay){
  let timer = null;
  let startTime = Date.now();
  return function (){
    let curTime = Date.now();
    let remainTime = delay - (curTime - startTime);
    let args = arguments;
    let context = this;
    if ( remainTime <= 0){
      fn.apply(context,args);
      startTime = Date.now();
    }else{
      timer = setTimeout(function(){
        fn.apply(context,args);
      },remainTime)
    }
  }
}

