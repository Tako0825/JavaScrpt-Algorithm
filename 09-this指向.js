let obj = {
    name: 'bytedance',
    getName() {
        return this.name
    }
}

let fb = obj.getName
console.log(fb())