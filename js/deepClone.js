const isObj = (target) => (typeof(target) === 'object' || typeof target === 'function' && target !== null)

function deepClone(target, map = new Map()) {
    if(map.get(target)) return target

    if(isObj(target)) {
        map.set(target, true)
        let cloneObj = Array.isArray(target) ? [] : {}
        if(target instanceof Date) {
            cloneObj = new Date(target)
        } else if(target instanceof RegExp){
            cloneObj = target
        } else if(Object.prototype.toString.call(target) == "[object Null]") {
            cloneObj = null
        } else {
            for(let key in target) {
                if(typeof target[key] === 'object') {
                    cloneObj[key] = deepClone(target[key], map)
                } else  {
                    cloneObj[key] = target[key]
                }
            }
        }
        return cloneObj
    } else {
        return target
    }
}

let ooo = {t: 1}
ooo.m = ooo

var obj = {
        a: 1, b: 2, c: {
        d: 1,
        e: new Date('2010'),
        h: /^[0-9]*$/
    }, 
    f: new Date('2021'), 
    g: /^[0-9]*$/,
    i: undefined,
    j: null,
    k: ooo
}

var cloneObj = deepClone(obj)
// var cloneObj2 = JSON.parse(JSON.stringify(obj))

console.log(cloneObj)