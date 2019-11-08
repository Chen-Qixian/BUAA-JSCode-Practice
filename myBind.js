/**
 * 原型式编程： 完整模拟实现bind
 */
Function.prototype.myBind = function(context) {
    // 5-注意实现的严谨性，bind的调用者必须是函数
    if(typeof this !== 'function') {
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
    }
    let _this = this; // 1-获取该函数调用者
    let args = [].slice.call(arguments, 1);

    // 4-原型式继承，解决修改关联问题
    let F = function(){};

    let fBound = function() {
        // 2-柯里化
        let bindArgs = [].slice.call(arguments);
    
        // 3-bind特性：当绑定函数作为构造函数时，this指向实例，bind的第一个参数失效；作为普通函数时，this指向bind第一个参数
        return _this.apply(
            this instanceof F ? this: context,
            args.concat(bindArgs)
        );
    }
    // 4-bind特性：可以继承自函数原型中的值，注意这里使用原型式继承，避免数据关联问题
    F.prototype = this.prototype;
    fBound.prototype = new F();
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

let bindFoo = bar.myBind(foo, 'Jack'); // 绑定的函数，既可以当作普通函数调用，也可当作构造函数生成一个对象
let obj = new bindFoo(20);

console.log(obj.habit);
console.log(obj.friend);
