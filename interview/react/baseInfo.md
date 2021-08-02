
### 高阶函数
  1. 高阶函数是将函数作为参数或返回函数的函数,Array.map，Array.filter和Array.reduce是高阶函数
  ```js
    const numbers = [10,20,40,50,60,70,80]

    const out1 = numbers.map(num => num * 100);
    console.log(out1);
    // [ 1000, 2000, 4000, 5000, 6000, 7000, 8000 ]

    const out2 = numbers.filter(num => num > 50);
    console.log(out2);
    // [ 60, 70, 80 ]

    const out3 = numbers.reduce((out,num) => out + num);
    console.log(out3);
    // 330

    const isYoung = age => age < 25;

    const message = msg => "He is "+ msg;

    function isPersonOld(age, isYoung, message) {
        const returnMessage = isYoung(age)?message("young"):message("old");
        return returnMessage;
    }

    // passing functions as an arguments
    console.log(isPersonOld(13,isYoung,message))
    // He is young

  ```

### React和Angular区别
Angular是一个成熟的MVC框架，带有很多特定的特性，比如服务、指令、模板、模块、解析器等等。React是一个非常轻量级的库，它只关注MVC的视图部分。
Angular遵循两个方向的数据流，而React遵循从上到下的单向数据流。React在开发特性时给了开发人员很大的自由，例如，调用API的方式、路由等等。我们不需要包括路由器库，除非我们需要它在我们的项目


### React虚拟DOM
  1. React将整个dom副本保存为虚拟dom
  2. 每当有更新的时候都会维护两个虚拟DOM,用来比较之前的状态和当前的状态,并确定哪个对象被更改.通过对比两个虚拟dom差异,并将这些变化更新到实际dom上去


### Vue和React的diff区别
  1. vue的diff:从节点的两侧向中间对比,如果节点的key值与元素类型相同,属性不同,就会认为不同节点,然后删除重建
  2. 从节点的左侧开始对比,就好比将新老虚拟dom放入两个栈中，一对多依次对比；如果节点的key值与元素类型相同，属性值不同，react会认为是同类型节点，只是修改节点属性
  3. 相同点: 都只进行同级比较，忽略了跨级操作；常见的现象就是对数组或者对象中的深层元素进行修改时，视图层监测不到其变化，故不会对dom进行更新，需调用一些特质方法来告诉视图层需要更新dom