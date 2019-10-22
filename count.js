/**
 * 统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
    1. 不限制 key 的顺序
    2. 输入的字符串参数不会为空
    3. 忽略空白字符
 * @param {String} str 
 */
function count(str) {
    let obj = {}
    str = str.replace(/\s/g,'');
    console.log(str);
    for(let i = 0, len = str.length; i < len ; i ++) {
        if(!obj.hasOwnProperty(str[i])) {
            obj[str[i]] = 0;
        }
        obj[str[i]] ++;
    }
    return obj;
}