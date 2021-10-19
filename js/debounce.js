// 应用场景 resize,input框输入,元素的拖动

const debounce = function (fn,delay) {
  let timer = null;
  return function (){
    let args = arguments;
    let context = this;
    if(timer) clearTimeout(timer)
    timer = setTimeout(function(){
      fn.apply(context,args);
    },delay)
  }
}