MyMap.prototype.get = function(key) {
    const target = this.map.find(item => key === item[0])
    return target ? target[1] : undefined
}

MyMap.prototype.set = function(key, value) {
    if(this.has(key)) {
        const index = this.map.findIndex(item => key === item[0])
        this.map[index][1] = value
    } else {
        this.map.push([key, value])
        this.size ++
    }
    return this
}

MyMap.prototype.has = function(key) {
    return this.get(key) ? true : false
}

MyMap.prototype.delete = function(key) {
    const index = this.map.findIndex(item => key === item[0])
    if(index === -1) return false
    this.map.splice(index, 1)
    this.size --
    return true
}

MyMap.prototype.keys = function() {
    return this.map.map(item => item[0])
}

MyMap.prototype.values = function() {
    return this.map.map(item => item[1])
}

MyMap.prototype.clear = function() {
    this.map.splice(0, this.size)
    this.size = 0
}

MyMap.prototype.size = 0

MyMap.prototype.forEach = function(callback) {
    this.map.forEach(item => {
        const [key, value] = item
        callback(value, key)
    })
}

function MyMap() {
    this.map = new Array()
}

const map = new MyMap()
map.set('name', 'Jimmy')
map.set('age', 20)
map.set('age', 30)
console.log(map.get('name'))
console.log(map.get('age'))
console.log(map.has('address'))
console.log(map.has('age'))
map.set('address', '佛山顺德').set('salary', 3000)
console.log(map.size)
map.delete('age')
console.log(map.get('age'))
console.log(map.keys())
console.log(map.values())
map.forEach((value, key) => {
    console.log(key, '-', value)
})