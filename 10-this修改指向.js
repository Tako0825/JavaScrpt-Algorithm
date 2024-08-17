Function.prototype.myCall = function (target, ...args) {
    target.a = this
    return target.a(...args)
}

Function.prototype.myApply = function(target, args) {
    target.a = this
    return target.a(args)
}

Function.prototype.myBind = function(target, ...args) {
    target.a = this
    return function() {
        return target.a(...args)
    }
}

let obj = {
    name: "bytedance-"
}

function func(...args) {
    if(Array.isArray(args[0])) {
        return this.name + args[0].join('')
    }
    return this.name + args.join('')
}

console.log(func.myCall(obj, ...'call'.split('')))
console.log(func.myApply(obj, 'apply'.split('')))
const fb = func.myBind(obj, ...'bind'.split(''))
console.log(fb())
