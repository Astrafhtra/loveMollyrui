
### Array.prototype.fill()
  <!-- arr.fill(value[, start[, end]]) -->
  fill()方法用一个固定的值来填充一个数组中从起始索引内的全部元素,不包括终止索引.
  fill方法接受三个参数value,start,以及end;start和end参数是可选的,其默认值分别为0和this对象的length属性值.
  
  ```js
    [1, 2, 3].fill(4);               // [4, 4, 4]
    [1, 2, 3].fill(4, 1);            // [1, 4, 4]
    [1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
    [1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
    [1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
    [1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
    [1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
    [1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
    Array(3).fill(4);                // [4, 4, 4]
    [].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

    // Objects by reference.
    var arr = Array(3).fill({}) // [{}, {}, {}];
    // 需要注意如果fill的参数为引用类型，会导致都执行都一个引用类型
    // 如 arr[0] === arr[1] 为true
    arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
  ```
