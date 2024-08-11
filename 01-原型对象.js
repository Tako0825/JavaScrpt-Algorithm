const Animal = function(category) {
    this.category = category
}

const cat = new Animal("猫")
// 1. 创建一个空对象 {}
// 2. 该空对象的 __proto__ 设置为构造函数的 prototype
// 3. 将构造函数中的 this 指向这个空对象 {}
// 4. 执行该构造函数
// 5. 返回这个对象

const Cat = function(name) {
    this.name = name
}

Cat.prototype = cat

const bobby = new Cat("波比")

console.log(bobby.name)
console.log(bobby.category)
console.log(bobby.__proto__ === cat)
console.log(cat.__proto__ ===  Animal.prototype)
console.log(Animal.prototype.__proto__ === Object.prototype)