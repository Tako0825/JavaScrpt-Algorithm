function main(arr) {
    const map = new Map()
    arr.forEach(item => {
        if(map.has(item.pid)) {
            map.set(item.pid, map.get(item.pid).concat([{ id: item.id, name: item.name }]))
        } else {
            map.set(item.pid, [{ id: item.id, name: item.name }])
        }
    })
    const root = map.get(undefined)[0]
    return generateTree(root.id)

    function generateTree(id) {
        const node = arr.find(item => item.id === id)
        delete node.pid
        if(map.has(node.id)) {
            node.children = map.get(node.id).map(item => generateTree(item.id))
        }
        return node
    }
}

const arr = [
    { id: 0, name: "中国" },
    { id: 1, pid: 0, name: "广东省" },
    { id: 2, pid: 0, name: "浙江省" },
    { id: 3, pid: 1, name: "广州市" },
    { id: 4, pid: 1, name: "深圳市" },
    { id: 5, pid: 2, name: "杭州市" },
    { id: 6, pid: 4, name: "南山区" },
    { id: 7, pid: 4, name: "福田区" },
]

const tree = main(arr)

// console.log(tree)
// console.log(tree.children)
// console.log(tree.children[0])
// console.log(tree.children[1])
// console.log(tree.children[0].children)
console.log(tree.children[0].children[1])
