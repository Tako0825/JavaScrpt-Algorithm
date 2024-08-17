console.log("start")
setTimeout(() => {
    new Promise(resolve => {
        console.log("aaa")
        resolve()
    }).then(() => {
        console.log("promise2")
    })
}, 100)
setTimeout(() => {
    console.log("bbb")
    new Promise(resolve => {
        resolve()
        console.log("promise1")
    }).then(() => {
        console.log("setTimeout")
    })
})
console.log("end")