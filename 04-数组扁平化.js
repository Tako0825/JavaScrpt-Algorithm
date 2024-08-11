function main(arr) {
    // 递归出口
    if(!arr.find(item => Array.isArray(item))) {
        return arr
    }
    const afterExtend = []
    arr.forEach(item => {
        if(Array.isArray(item)) {
            afterExtend.splice(afterExtend.length, 0, ...item)
        } else {
            afterExtend.push(item)
        }
    })
    return main(afterExtend)
}

console.log(main([1, [2, [3, 4, [[5, 6]]], 7], 8]))