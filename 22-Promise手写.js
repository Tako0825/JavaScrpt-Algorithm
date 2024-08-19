MyPromise.prototype.then = function(callback) {
    return new MyPromise((resolve, reject) => {
        if(this.status === 'pending') {
            this.taskQueues.push((data) => {
                const result = callback(data)
                resolve(result)
            })
        } else if(this.status === 'fulfilled') {
            const result = callback(data)
            resolve(result)
        }
    })
}

function MyPromise(callback) {
    this.data = null
    this.taskQueues = []
    this.status = 'pending'

    this.resolve = (arg) => {
        this.data = arg
        this.status = 'fulfilled'
        setTimeout(() => {
            this.taskQueues.forEach(task => {
                task(this.data)
            })
        }, 0)
    }

    this.reject = (err) => {

    }

    callback(this.resolve, this.reject)
}

const promise = new MyPromise((resolve, reject) => {
    const data = [
        { id: 1, name: 'Jimmy' },
        { id: 2, name: 'Frank' },
        { id: 2, name: 'Lucy' }
    ]
    setTimeout(() => {
        resolve(data)
    }, 2000)
}).then(data => {
    return data
}).then(data => {
    console.log(data)
})