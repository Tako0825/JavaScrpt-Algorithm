const fetchDogs = () => new Promise(resolve => setTimeout(() => resolve(['小白', '小黑']), 3000))
const fetchCats = () => new Promise(resolve => setTimeout(() => resolve(['波比', '咪咪']), 2000))
const fetchPerson = () => new Promise(resolve => setTimeout(() => resolve(['Jimmy', 'Tony']), 1000))
const promises = [fetchDogs(), fetchCats(), fetchPerson()]

function PromiseAll(promises) {
    return new Promise(resolve =>{ 
        let sum = 0
        let result = new Array(promises.length)
        promises.forEach((promise, index) => {
            promise.then(data => {
                sum ++
                result[index] = data
                if(sum === promises.length) {
                    resolve(result)
                }
            })
        })
    })
}

function PromiseRace(promises) {
    return new Promise(resolve => {
        promises.forEach(promise => {
            promise.then(data => {
                resolve(data)
            })
        })
    })
}

PromiseAll(promises).then(data => {
    console.log(data)
})

PromiseRace(promises).then(data => {
    console.log(data)
})