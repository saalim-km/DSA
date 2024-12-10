class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    getMin() {
        return this.minStack[this.minStack.length-1];
    }
    push(data) {
        if(this.minStack.length ==0 || data < this.getMin()){
            this.minStack.push(data);
        }
        this.stack.push(data);
    }
    pop(){
        let temp = this.stack.pop();
        if(temp == this.getMin()){
            this.minStack.pop();
        }
    }
    getTop(){
        return this.stack[this.stack.length-1];
    }
}
const a = new MinStack();
a.push(1)
a.push(5)
a.push(8)
a.pop();
console.log(a.getMin());
