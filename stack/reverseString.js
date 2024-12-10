//? REVERSE A STRING
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

    isEmpty() {
        return this.stack.length == 0;
    }

    getSize() {
        return this.stack.length;
    }
}

function reverseString(str) {
    let rev = '';
    const stack = new Stack();

    for(let i=0;i<str.length;i++) {
        stack.push(str[i]);
    }

    while(!stack.isEmpty()) {
        rev += stack.pop();
    }

    return rev;
}
console.log(reverseString('hello'));