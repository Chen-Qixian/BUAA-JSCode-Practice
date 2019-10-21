/**
 *  按所给的时间格式输出指定的时间
    格式说明
    对于 2014.09.05 13:14:20
    yyyy: 年份，2014
    yy: 年份，14
    MM: 月份，补满两位，09
    M: 月份, 9
    dd: 日期，补满两位，05
    d: 日期, 5
    HH: 24制小时，补满两位，13
    H: 24制小时，13
    hh: 12制小时，补满两位，01
    h: 12制小时，1
    mm: 分钟，补满两位，14
    m: 分钟，14
    ss: 秒，补满两位，20
    s: 秒，20
    w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五
 * @param {Object} oDate 
 * @param {String} sFormat 
 */
function formatDate(oDate, sFormat) {
    let y = oDate.getFullYear(),
        m = oDate.getMonth() + 1,
        d = oDate.getDate(),
        h = oDate.getHours(),
        mi = oDate.getMinutes(),
        s = oDate.getSeconds(),
        day = oDate.getDay(),
        w = ['日','一','二','三','四','五','六'];
    return sFormat.replace(/yyyy/, y)
                    .replace(/yy/, pad(y % 100))
                    .replace(/MM/, pad(m))
                    .replace(/M/, m)
                    .replace(/dd/, pad(d))
                    .replace(/d/, d)
                    .replace(/HH/, pad(h))
                    .replace(/H/, h)
                    .replace(/hh/, pad(h % 12))
                    .replace(/h/, h % 12)
                    .replace(/mm/, pad(mi))
                    .replace(/m/, mi)
                    .replace(/ss/, pad(s))
                    .replace(/s/, s)
                    .replace(/w/, w[day])
}

function pad(n) {
    return n < 10 ? '0' + +n : n;
}