// 无法去重{}
Array.prototype.uniq1 = function() {
    return [... new Set(this)];
}
// 无法去重{}
Array.prototype.uniq2 = function() {
    return Array.from(new Set(this));
}
// 无法去重NaN
Array.prototype.uniq3 = function() {
    let arr = this;
    let a = [];
    for(let i = 0, len = arr.length ; i < len ; i ++) {
        if(a.indexOf(arr[i]) == -1) {
            a.push(arr[i]);
        }
    }
    return a;
}
// 优 能去重NaN,{}
Array.prototype.uniq4 = function() {
    let arr = this;
    let obj = {};
    return arr.filter(function(item) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true);
    })
}