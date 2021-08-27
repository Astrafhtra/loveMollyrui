// [3, 2, 5, 1, 7] => 3  

// 1 2 2 3 3 5 7

function findMaxLen(arr) {
    if (!Array.isArray(arr)) return
    arr = arr.sort((a, b) => a - b)
    let res = 0,
        len = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === 1) {
            len += 1;
        } else if (arr[i] === arr[i - 1]) {
            console.log(1);
        } else {
            res = len > res ? len : res
            len = 0
        }
    }
    return res
}

console.log(findMaxLen([3, 2, 5, 1, 7, 2, 3, 2, 2]));


function findMaxLen2(arr) {
    let map = {},
        mapHandle = {}
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = true
        }
    }
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        let item1 = arr[i],
            item2 = arr[i]
        let len = 1
        if (!mapHandle[arr[i]]) {
            console.log(arr[i], 222);
            mapHandle[arr[i]] = true
            let flag1 = map[item1 - 1]
            let flag2 = map[item2 + 1]
            while (flag1) {
                mapHandle[item1 - 1] = true
                len += 1;
                item1 = item1 - 1
                flag1 = map[item1 - 1]
            }
            while (flag2) {
                mapHandle[item2 + 1] = true
                len += 1;
                item2 = item2 + 1
                flag2 = map[item2 + 1]
            }
            res = res > len ? res : len
        }
    }
    return res
}

console.log(findMaxLen2([3, 2, 5, 1, 7, 4, 2, 3, 6]));