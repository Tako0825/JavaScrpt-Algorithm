let root = {
    val: 1,
    left: {
        val: 2,
        left: { val: 7 },
        right: { val: 2 }
    }, 
    right: {
        val: 3
    }
}

// 找出该二叉树所有路径： 1->2->7 \ 1->2->2 \ 1->3
// 实现一个函数 treeSum 能够求出所有路径之和，示例： 127 + 122 + 13 = 262

function treeSum(root) {
    let sum = 0
    
    function search(node, path) {
        // path = path || [] 会造成递归引用
        path = [].concat(path || [])
        path.push(node.val)
        console.log(path);
        if(!node.left && !node.right) {
            return sum += parseInt(path.join(''))
        }
        node.left && search(node.left, path)
        node.right && search(node.right, path)
    }

    search(root)
    return sum
}

console.log(treeSum(root))