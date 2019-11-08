/**
 * 封装函数 f，使 f 的 this 指向指定的对象
 * @param {Function} f 
 * @param {Object} oTarget 
 */

function bindThis(f, oTarget) {
    return function() {
        return f.apply(oTarget, [].slice.call(arguments));
    }
}