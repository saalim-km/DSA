
//? QUEUE USING CLASS
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        
        if(this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
            this.length++;
            return;
        }

        this.rear.next = newNode;
        this.rear = newNode;
        this.length++;
    }

    dequeue() {
        if(this.isEmpty()) return;

        this.front = this.front.next;
        this.length--;
    }

    display() {
        let curr = this.front;
        while(curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    isEmpty() {
        return this.length==0;
    }
}

const a = new Queue();
a.enqueue(10);
a.enqueue(40);
a.enqueue(50);
a.enqueue(60);
a.dequeue();
a.dequeue();
a.display()





//? USING ARRAY
class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    enqueue(data) {
        this.queue.push(data);
        this.size++;
    }

    dequeue() {
        this.queue.shift();
        this.size--;
    }

    display() {
        console.log(this.queue.join(' , '));
    }
}

const a = new Queue();
a.enqueue(10)
a.enqueue(40)
a.enqueue(50)
a.enqueue(20);
a.dequeue();
a.dequeue();
a.display()


console.log('completed_________________________________________________________________________________________________________');
