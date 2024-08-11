function main(nums) {
    let count = index = 0 
    while(count < nums.length) {
        // 是否为零
        if(nums[index] > 0) {
            // 是否重复
            if(nums.slice(0, index).includes(nums[index])) {
                nums.splice(index, 1)
            } else {
                index ++
            }
        } else {
            nums.splice(index, 1)
            nums.push(0)
        }
        count ++
    }
}

const nums = [4, 2, 0, 4, 7, 0, 0, 4, 9]
main(nums)
console.log(nums)