// ? STACK USING OBJECT
class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }

    push(data){
        this.stack[this.size] = data;
        this.size++;
    }

    pop() {
        let item = this.stack[this.size - 1];
        delete this.stack[this.size - 1];
        this.size--;
        return item;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size == 0;
    }

    print() {
        console.log(this.stack);
    }
}