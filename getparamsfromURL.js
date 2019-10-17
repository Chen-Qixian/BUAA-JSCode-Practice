/**
 * 获取 url 中的参数
    1. 指定参数名称，返回该参数的值 或者 空字符串
    2. 不指定参数名称，返回全部的参数对象 或者 {}
    3. 如果存在多个同名参数，则返回数组
 * @param {String} sUrl 
 * @param {String} sKey 
 */
function getUrlParam(sUrl, sKey) {
    let param = sUrl.split('#')[0].split('?')[1];
    if(sKey) {
        let args = param.split('&');
        let res = new Array();
        for(let i = 0, len = args.length; i < len ; i ++) {
            let item = args[i].split('=');
            if(item[0] == sKey) {
                res.push(item[1]);
            }
        } 
        if(res.length == 0) {
            return "";
        }
        else if(res.length == 1) {
            return res[0];
        }
        else {
            return res;
        }
    }
    else {
        if(param == undefined || param == "") {
            return {};
        }
        let args = param.split('&');
        let res = new Object();
        for(let i = 0 , len = args.length; i < len ; i ++) {
            let item = args[i].split('=');
            if(!(item[0] in res)) {
                res[item[0]] = [];
            }
            res[item[0]].push(item[1]);
        }
        return res;
    }
}