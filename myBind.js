Function.prototype.myBind = function(context) {
    let _this = this; // 获取该函数调用者
    let args = [].slice.call(arguments, 1);

    let fBound = function() {
        // 柯里化
        let bindArgs = [].slice.call(arguments);
        
        // bind特性：当绑定函数作为构造函数时，this指向实例，bind的第一个参数失效；作为普通函数时，this指向bind第一个参数
        return _this.apply(
            this instanceof fBound ? this: context,
            args.concat(bindArgs)
        );
    }
    // bind特性：可以继承自函数原型中的值
    fBound.prototype = this.prototype;
    return fBound;
}


/* TEST */
let value = 2;

let foo = {
    value: 1
}

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'AAO';

let bindFoo = bar.myBind(foo, 'Jack');
let obj = new bindFoo(20);

console.log(obj.habit);
console.log(obj.friend);
