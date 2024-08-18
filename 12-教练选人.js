const members = [5, 3, 1, 7, 2, 6, 4]
const m = 1

function main(m, members) {
    const result = [...members]
    let a = true
    const map = new Map()

    while(members.length > 0) {
        const max = Math.max(...members)
        console.log(max)
        const maxIndex = members.findIndex(member => member === max)
        const startIndex = maxIndex - m > 0 ? maxIndex - m : 0
        const endIndex = maxIndex + m < members.length - 1 ? maxIndex + m : members.length - 1
        for(let i = startIndex; i <= endIndex; i ++) {
            map.set(members[i], a ? 'A' : 'B')
        }
        a = !a
        const count = m * 2 + 1
        members.splice(startIndex, count)
    }

    return result.map(item => map.get(item)).join('')
}

console.log(main(m, members))