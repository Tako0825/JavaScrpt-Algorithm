/**
 * 函数柯里化：拆分参数的工厂函数
 * @param {Function} func - 需要柯里化的函数。该函数应该接受固定数量的参数。
 * @returns {Function} - 柯里化后的函数。它可以被部分应用，直到传入足够的参数为止。
*/
function curry(func) {
    return function curried(...args) {
        if(args.length >= func.length) {
            return func(...args)
        }
        return function(...nextArgs) {
            return curried(...args.concat(nextArgs || []))
        }
    }
}

function getSum(a, b, c, d) {
    return [a, b, c, d].reduce((prev, current) => prev + current, 0)
}

// 1.固定功能函数
const fn = curry(getSum)

// 2.不同形式分配剩余参数
console.log(fn(1, 2, 3)()()(4)) // 10
console.log(fn(1, 2)()()(3, 4)) // 10
console.log(fn(1)()()(2, 3, 4)) // 10