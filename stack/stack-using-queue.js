//? STACK USING QUEUE
class StackUsingQueue {
    constructor(){
        this.queue1 = [];
        this.queue2 = [];
    }

    push(a) {
        this.queue1.push(a);
    }

    pop() {
        while(this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        this.queue1.shift();

        [this.queue1 , this.queue2] = [this.queue2 , this.queue1];
    }

    top() {
        while(this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        let lastItem = this.queue1.shift();

        this.queue2.push(lastItem);

        [this.queue1 , this.queue2] = [this.queue2 , this.queue1];

        return lastItem;
    }
    
    display() {
        return this.queue1.join(' , ');
    }
}

const st = new StackUsingQueue();
st.push(5)
st.push(1)
st.push(4)
st.push(2)
st.pop();
console.log(st.top());
console.log(st.display());