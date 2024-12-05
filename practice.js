// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }


// class LinkedList {

//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }

//     size() {
//         return this.size;
//     }

//     addStart(data) {
//         const newNode = new Node(data);
//         if(!this.head) {
//             this.head = newNode;
//             return;
//         }

//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//     }
    
//     addLast(data) {
//         const newNode = new Node(data);
//         let current = this.head;
//         while(current.next) {
//             current = current.next;
//         }

//         current.next = newNode;
//         this.length++;
//     }

//     deleteFirst() {
//         let current = this.head.next;
//         this.head = current;
//         this.length--;
//     }
    
//     deleteLast(){
//         if(!this.head) {
//             console.log('list is empty');
//             return;
//         }else {
//             let current = this.head;
//             let previous = null;
//             while(current.next){
//                 previous = current;
//                 current = current.next;
//             }
//             previous.next = null;
//         }
//         this.length--;
//     }

//     reverse(){

//         let previous = null;
//         let current = this.head;
//         let next = null;

//         while(current){
//             next = current.next;
//             current.next = previous;
//             previous = current;
//             current = next;
//         }

//         this.head = previous;
//     }

//     prinList() {
//         let current = this.head;
//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }

// }

// const a = new LinkedList();
// a.addStart(1);
// a.addStart(4);
// a.addStart(3);
// a.addLast(6)
// a.addLast(2);
// // a.reverse();
// a.prinList();
