/**
 * 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
 * 否则如果字符 Unicode 编码 > 255 则长度为 2
 * @param {String} s 
 * @param {Boolean} bUnicode255For1 
 */
function strLength(s, bUnicode255For1) {
    let res = s.length;
    if(bUnicode255For1 === true) return res;
    for(let i = 0, len = s.length ; i < len ; i ++) {
        if(s.charCodeAt(i) > 255) {
            res ++;
        }
    }
    return res;
}