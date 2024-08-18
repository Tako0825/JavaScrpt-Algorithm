const nums = [1, 0, -1, 0, -2, 2]

function getGroups(nums, length) {
    const groups = new Array()
    nums.sort((a, b) => a - b)

    function func(group, start) {
        if(group.length >= length) {
            return groups.push(group)
        }
        for(let i = start; i < nums.length; i ++) {
            func([...group, nums[i]], i + 1)
        }
    }
    
    func([], 0)
    return Array.from(new Set(groups.map(group => {
        return group.join('*')
    }))).map(group => {
        return group.split('*').map(num => parseInt(num))
    })
}

function getSum(nums) {
    return nums.reduce((prev, current) => prev + current, 0)
}

function main(nums, target) {
    const groups = getGroups(nums, 4)
    return groups.filter(group => getSum(group) === target)
}

console.log(main(nums, 0))
