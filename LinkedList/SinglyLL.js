//? SINGLY LINKEDLIST
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkdedList {
    constructor() {
        this.head=null;
        this.length=0;
    }

    size() {
        return this.length;
    }

    prepend(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head=newNode;
            this.length++;
            return;
        }

        newNode.next=this.head;
        this.head=newNode;
        this.length++;
    }

    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head=newNode;
            this.length++;
            return;
        }

        let curr = this.head;
        while(curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
    }

    addAt(index,data) {
        const length = this.size();
        const newNode = new Node(data);

        if(index < 0 || index > length) {
            console.log('index not found');
            return;
        }

        if(index==1) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let prev = null;
        let curr = this.head;

        for(let i=1;i<=length;i++) {
            if(i==index) {
                prev.next = newNode;
                newNode.next = curr;
            }
            prev = curr;
            curr = curr.next;
        }
    }

    removeFirst() {
        if(!this.head) {
            console.log('no items to delete');
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if(!this.head) {
            console.log('no items to delete');
            return;
        }

        let prev = null;
        let curr = this.head;
        while(curr.next) {
            prev=curr;
            curr=curr.next;
        }

        prev.next=null;
    }

    removeMiddle() {
        

    }

    reverse() {
        if(!this.head) {
            console.log('list is empty');
            return;
        }

        let prev=null;
        let curr=this.head;
        let next=null;

        while(curr) {
            next=curr.next;
            curr.next=prev;
            prev = curr;
            curr = next;
        }

        this.head=prev;
    }

    deleteAt(index) {
        if(!this.head) {
            console.log('list is empty');
            return;
        }

        if(index==1) {
            this.head=this.head.next;
            return;
        }


        let prev = null;
        let curr = this.head;
        for(let i=1;i<index;i++) {
            prev = curr;
            curr = curr.next;
        }

        prev.next = curr.next;
    }

    printList() {
        let curr = this.head;
        while(curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

}


const a = new LinkdedList();
a.append(10);
a.prepend(20);
a.addAt(2,35);
a.removeMiddle();
a.printList();