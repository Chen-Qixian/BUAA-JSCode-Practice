Function.prototype.myBind = function(context) {
    let _this = this; // 获取该函数调用者
    let args = [].slice.call(arguments, 1);

    return function() {
        // 柯里化
        let bindArgs = [].slice.call(arguments);
        return _this.apply(context, args.concat(bindArgs));
    }
}

let value = 2;

let foo = {
    value: 1
}

function bar(name, age) {
    return {
        name: name,
        age: age,
        value: this.value
    }
}

let bindFoo = bar.myBind(foo, 'hello');
bindFoo(20);