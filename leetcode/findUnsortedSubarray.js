/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let index = key = -1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[i] > nums[j]) {
                index = i;
                break;
            }
        }
        if( i === index){
            break;
        }
    }
    let arr1 = nums.reverse();
    if (index > 0) {
        for (let a = 0; a < arr1.length; a++) {
            for (let b = a + 1; b < arr1.length - 1; b++) {
                if (arr1[a] < arr1[b]) {
                    key = arr1.length - a - 1;
                    return key - index + 1
                }
            }
        }
    } else {
        return 0
    }
};
// var findIndex = function (nums) {
//     let index = -1;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             if (nums[i] > nums[j]) {
//                 index = i;
//                 return index;
//             }
//         }
//     }
// }
// var findKey = function (nums) {
//     let arr1 = nums.reverse();
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = i + 1; j < arr1.length - 1; j++) {
//             if (arr1[i] < arr1[j]) {
//                 key = arr1.length - i - 1;
//                 return key
//             }
//         }
//     }
// }

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// console.log(findIndex([2, 6, 4, 8, 10, 9, 15]));
// console.log(findKey([2, 6, 4, 8, 10, 9, 15]));