//? FIND EVEN NUMBER FROM STACK
class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length-1];
    }

    isEmpty() {
        return this.stack.length == 0;
    }
    getEven() {
        const evenStack =  new Stack();
        let temp = [];
        while(!this.isEmpty()) {
            let item = this.pop();
            if(item % 2 == 0) {
                evenStack.push(item);
            }
            temp.push(item);
        }

        while(temp.length > 0) {
            this.push(temp.pop());
        }

        return evenStack;
    }
    
    display() {
        return this.stack;
    }
}

const a = new Stack();
a.push(10)
a.push(16)
a.push(15)
console.log(a.display());
console.log(a.getEven().display());



console.log('completed_________________________________________________________________________________________________________');
