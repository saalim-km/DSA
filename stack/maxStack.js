class MaxStack {
    constructor() {
        this.stack = [];
        this.maxStack = [];
    }
    getMax() {
        return this.maxStack[this.maxStack.length-1];
    }

    push(data) {
        if(this.maxStack.length == 0 || data >= this.getMax()) {
            this.maxStack.push(data);
        }
        this.stack.push(data);
    }

    pop() {
        let temp = this.stack.pop()
        if(temp == this.getMax()){
            this.maxStack.pop();
        }
    }

    displayStack(){
        console.log(this.stack);
    }

    displayMaxStack() {
        console.log(JSON.stringify(this.maxStack)); 
    }
}

const a = new MaxStack();
a.push(1)
a.push(7)
a.push(4)
a.push(9)
a.pop();
a.pop();
a.push(99);
a.displayStack()
a.displayMaxStack();