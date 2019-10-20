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