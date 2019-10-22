/**
 * 正则提取表达式练习
 * 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
    1. rgb 中每个 , 后面的空格数量不固定
    2. 十六进制表达式使用六位小写字母
    3. 如果输入不符合 rgb 格式，返回原始输入
 * @param {String} sRGB 
 */
function rgb2hex1(sRGB) {
    let res = '#';
    let reg = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
    if (reg.test(sRGB)) {
        let n1 = RegExp.$1, n2 = RegExp.$2, n3 = RegExp.$3;
        if(n1 < 0 || n1 > 255 || n2 < 0 || n2 > 255 || n3 < 0 || n3 > 255) res = sRGB;
        else {
            n1 = parseInt(n1, 10).toString(16);
            n2 = parseInt(n2, 10).toString(16);
            n3 = parseInt(n3, 10).toString(16);
            n1 = (n1.length == 1) ? ('0' + n1) : n1;
            n2 = (n2.length == 1) ? ('0' + n2) : n2;
            n3 = (n3.length == 1) ? ('0' + n3) : n3;
            res += (n1 + n2 + n3);
        }   
    }
    else {
        res = sRGB;
    }
    return res;
}

function rgb2hex2(sRGB) {
    let reg = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
    let arr = sRGB.match(reg);
    let str = '#';
    if(!arr) {
        return sRGB;
    }
    else {
        for(let i = 1; i <= 3; i ++) {
            let m = parseInt(arr[i], 10);
            if(m >= 0 && m <= 255) {
                str += (m < 16 ? ('0' + m.toString(16)) : m.toString(16));
            }
            else {
                return sRGB;
            }
        }
    }
    return str;
}