class HashTableLinear {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        while (this.table[index] !== undefined) {
            index = (index + 1) % this.size
        }
        this.table[index] = [key, value]
    }

    get(key) {
        let index = this.hash(key)
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                return this.table[index][1]
            }
            index = (index + 1) % this.size
        }
        return undefined
    }

    remove(key) {
        let index = this.hash(key)
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                const value = this.table[index]
                this.table[index] = undefined
                return value
            }
            index = (index + 1) % this.size
        }
        return undefined
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTableLinear(30)
table.set('name', "kiran")
table.set('name', "vinu")
table.set('age', 29)
table.display()