Function.prototype.apply = function(context, args) {
    context = context ? Object(context) : window; 
    context.fn = this;
    
    let result;
    if(!args) {
        result = context.fn();
    }
    else {
        result = context.fn(...args);
    }
    delete context.fn;
    return result;
}