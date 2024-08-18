var LRUCache = function(capacity) {
    this.cache = new Map()
    this.capacity = capacity
}

LRUCache.prototype.get = function(key) {
    const value = this.cache.get(key)
    if(value) {
        this.cache.delete(key)
        this.cache.set(key, value)
        return value
    }
    // 未发现该缓存
    else return -1
}

LRUCache.prototype.put = function(key, value) {
    // 缓存已存在
    if(this.cache.has(key)) {
        this.cache.delete(key)
    } 
    // 缓存容量超载
    else if(this.cache.size >= this.capacity) {
        this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
}

const lRUCache = new LRUCache(2)
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1));    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2));    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1));    // 返回 -1 (未找到)
console.log(lRUCache.get(3));    // 返回 3
console.log(lRUCache.get(4));    // 返回 4