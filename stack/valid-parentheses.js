? USING ARRAY 

class Stack {
    constructor() {
        this.items = [];
    }

    push(data) {
        this.items.push(data);
    }

    pop() {
        if(this.isEmpty())
            return null;

        return this.items.pop();
    }

    isEmpty() {
        return this.items.length == 0;
    }
    
    
}


function isValid(s) {
    const stack = new Stack();
    const matchingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // Push opening brackets to the stack
        } else {
            if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
                return false; // Either stack is empty or mismatched
            }
        }
    }

    return stack.isEmpty();
}
<<<<<<< HEAD
console.log(isValid('({[]})'));



console.log('completed_________________________________________________________________________________________________________');
=======
console.log(isValid('({[]})'));
>>>>>>> 4faf37f33a2f8517f46d3854a0d1354a60d5c3e6
