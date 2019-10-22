/**
 * css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
    1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
    2. -webkit-border-image 转换后的结果为 webkitBorderImage
 * @param {String} sName 
 */
function cssStyle2DomStyle(sName) {
    if(!sName) return '';
    if(sName[0] == '-') {
        sName = sName.slice(1);
    }
    let res = ''
    for(let i = 0 , len = sName.length ; i < len ; i ++) {
        if(sName[i] == '-') {
            res += sName[++ i].toUpperCase();
        }
        else {
            res += sName[i];
        }
    }
    return res;
}