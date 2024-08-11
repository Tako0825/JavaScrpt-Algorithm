function main(arr) {
    // 递归出口
    if(arr.length <= 0) return arr

    const base = arr[0]
    const left = []
    const right = []
    arr.slice(1).forEach(item => {
        if(item.timestamp < base.timestamp) {
            left.push(item)
        } else {
            right.push(item)
        }
    })
    return [...main(left), base, ...main(right)]
}

const arr = [
    { id: 1, timestamp: 429000037 },
    { id: 2, timestamp: 429000042 },
    { id: 3, timestamp: 429000029 },
    { id: 4, timestamp: 429000040 },
    { id: 5, timestamp: 429000016 },
]

console.log(main(arr))