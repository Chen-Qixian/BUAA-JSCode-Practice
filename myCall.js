// ES5
Function.prototype.myCall = function(context) {
    // 当call绑定的this为null或undefiend时，将this指向window
    context = context ? Object(context) : window;
    // 这里context变量的含义为执行上下文，即call传入的第一个参数
    context.fn = this;

    // 将arguments拆分成数组交给context.fn执行
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i ++) {
        args.push('arguments[' + i + ']');
    }
    // 执行context.fn
    result = eval('context.fn(' + args + ')');
    // 删除多余的属性
    delete context.fn;
    return result;
}

// ES6
Function.prototype.myCall6 = function(context) {
    context = context ? context : window;
    context.fn = this;

    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}

bar.myCall(foo, 'kevin', 18);