/**
 * 检查邮箱地址是否合法
 * @param {String} sEmail 
 */
function isAvailableEmail(sEmail) {
    let reg = /^\w+(\.\w+)*@\w+(\.\w+)+$/
    return reg.test(sEmail);
}