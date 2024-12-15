class QueueUsingStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(a) {
        this.stack1.push(a);
    }

    pop() {
        while(this.stack1.length > 1) {
            this.stack2.push(this.stack1.pop());
        }

        this.stack1.shift();

        [this.stack1 , this.stack2] = [this.stack2 , this.stack1];
    }

    top() {
        while(this.stack1.length >1){
            this.stack2.push(this.stack1.pop());
        }

        let firstItem = this.stack1.pop();

        this.stack1.push(firstItem);

        while(this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }

        return firstItem;
    }

    display() {
        return this.stack1.join(' , ');
    }
}

const a = new QueueUsingStack();
a.push(4);
a.push(2);
a.push(8);
a.push(1);
a.pop();
console.log(a.top());
console.log(a.display());