function myNew(func, ...args) {
    const obj = {}
    obj.__proto__ = func.prototype
    func.call(obj, ...args)
    return obj
}

const Person = function(name, age) {
    this.name = name
    this.age = age
}

const Cat = function(name, hello) {
    this.name = name
    this.sayHello = () => {
        console.log(hello)
    }
}

// const lihua = new Person("李华")
const lihua = myNew(Person, "李华", 20)
const bobby = myNew(Cat, "波比", "你好，我叫波比！")

console.log(lihua.name)
console.log(lihua.age)
console.log(lihua.__proto__ === Person.prototype)

console.log(bobby.name);
bobby.sayHello()