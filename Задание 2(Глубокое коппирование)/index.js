function deepCopy(ob){
    const lodashClonedeep = require("lodash.clonedeep");
    var copy = lodashClonedeep(ob)
    return copy
}
var arr = [1, 'кошка', 2.0]
var arrCopy = deepCopy(arr)
console.log(arr)
console.log(arrCopy)
arrCopy.splice(0, 1, "hello")
console.log(arr)
console.log(arrCopy)