//  promise.all 等待多个请求都完成(或第一个失败)
Promise.prototype.all = function (iterators){
  const promises = Array.from(iterators);
  const len = promises.length;
  let count = 0;
  let resultLists = [];
  return new Promise((resolve,reject)=>{
    promises.forEach((p,index)=>{
      Promise.resolve(p)
      .then((res)=>{
        count++;
        resultLists.push(res)
        if(count === len){
          resolve(resultLists)
        }
      })
      .catch(err=>{
        reject(err)
      })
    })
  })
}