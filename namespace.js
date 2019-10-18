/**
 * 根据包名，在指定空间中创建对象
 * @param {Object} oNamespace 
 * @param {String} sPackage 
 */
function namespace(oNamespace, sPackage) {
    let arr = sPackage.split('.');
    let res = oNamespace;   // 保存一份原始对象

    for(let i = 0, len = arr.length; i < len ; i ++) {
        if(arr[i] in oNamespace) {
            if(typeof oNamespace[arr[i]] !== "object") {
                oNamespace[arr[i]] = {};
            }
        }
        else {
            oNamespace[arr[i]] = {};
        }
        oNamespace = oNamespace[arr[i]];
    }

    return res;
}