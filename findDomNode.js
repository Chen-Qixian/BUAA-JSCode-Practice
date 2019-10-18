/**
 * 查找两个节点的最近的一个共同父节点，可以包括节点自身
 * @param {Object} oNode1 
 * @param {Object} oNode2 
 */
function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)) return oNode1;
    return commonParentNode(oNode1.parentNode, oNode2);
}