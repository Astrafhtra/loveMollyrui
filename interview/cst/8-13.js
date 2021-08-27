var list = [
  {id: 1, name: '111'},
  {id: 2, name: '222'},
  {id: 3, name: '333'},
  {id: 4, name: '444'},
  {id: 5, name: '555'},
  {id: 6, name: '666'},
  {id: 7, name: '777'},
]

var result = []
function select(selectList){ 

  let arr = [...selectList]
  let arrVal = arr.map(item => item.id)
  let res = arrVal.filter(val => !result.includes(val))   // [ [list[3], list[4]]]
  let res2 = result.filter(val => arrVal.includes(val))    // [list[0], list[6]   // 过滤出两次都有的
  result = res2.concat(res)
  console.log( result);
}

select([list[0], list[1], list[6]]) // 输出顺序为 1，2，7
select([list[0], list[6], list[3], list[4]]) // 输出顺序为 1，7，4, 5 
select([list[0], list[4], list[2]]) // 1,5,3