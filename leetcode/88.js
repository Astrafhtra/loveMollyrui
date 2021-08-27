/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = p2 = 0;
  var sorted = new Array(m + n).fill(0);
  var cur;
  while (p1 < m || p2 < 2) {
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums2[p1++];
    }else if(nums1[p1] < nums2[p2]){
      cur = nums1[p1++];
    }else{
      cur = nums1[p2++];
    }
  }
  for(let i = 0; i != m+n;i++){
    nums1[i] = sorted[i];
  }
  return sorted;
}

console.log(merge([1,2,3,0,0,0],3,[4,5,6],))
