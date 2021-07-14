

<!-- 数组中占比超过一半的元素称之为主要元素。给你一个 整数 数组，找出其中的主要元素。若没有，返回 -1 。请设计时间复杂度为 O(N) 、空间复杂度为 O(1) 的解决方案。 
    输入:[1,2,5,9,5,9,5,5,5] 输出: 5
  -->


```js
  /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = -1;
  let count = 0;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }
    count = 0;
    const length = nums.length;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    return count * 2 > length ? candidate : -1;
};
majorityElement([3,2,3,3,3]) // 3
```

