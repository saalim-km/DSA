class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class DoublyLInkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(data) {
        const newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    append(data) {
        const newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    reverse() {
       let curr = this.head;
       let temp = null;

       while(curr !== null) {
        temp = curr.prev;
        curr.prev = curr.next;
        curr.next = temp;
        curr = curr.prev;
       }

       if(temp !== null) {
        this.head = temp.prev;
       }
    }

    print() {
        let curr = this.head;
        while(curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
    
}

const a = new DoublyLInkedlist();
a.prepend(40)
a.prepend(50)
a.prepend(70)
a.prepend(80)
a.append(90)
a.append(100)
a.prepend(23)
a.reverse()
a.print()