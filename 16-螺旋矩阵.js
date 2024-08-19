var spiralOrder = function(matrix) {
    const result = new Array()
    hulling(matrix)
    return result

    function hulling(arr) {
        arr = [].concat(arr)
        result.splice(result.length, 0, ...arr[0])
        arr.shift()
        for(let i = 0; i < arr.length - 1; i ++) {
            result.splice(result.length, 0, ...arr[i].splice(-1, 1))
        }
        if(arr.length > 0) {
            result.splice(result.length, 0, ...arr[arr.length - 1].reverse())
            arr.pop()
        }
        for(let i = arr.length - 1; i >= 0; i --) {
            result.splice(result.length, 0, ...arr[i].splice(0, 1))
        }
        if(arr.length > 0) {
            hulling(arr)
        }
    }
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))