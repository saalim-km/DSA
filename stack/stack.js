// ? STACK USING LINKED-LIST
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.size = 0;
//   }

//   push(data) {
//     const newNode = new Node(data);
//     if(this.isEmpty()) {
//         this.top = newNode;
//         this.size++;
//         return;
//     }   

//     newNode.next = this.top;
//     this.top = newNode;
//     this.size++;
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return;
//     }

//     this.top = this.top.next;
//     this.size--;
//   }

//   print() {
//     let curr = this.top;
//     while(curr) {
//         console.log(curr.data);
//         curr = curr.next;
//     }
//   }

//   isEmpty() {
//     return this.size == 0;
//   }
// }

// const a = new Stack();
// a.push(10);
// a.push(30);
// a.push(50);
// a.push(90);
// a.pop();
// a.pop();
// a.pop();
// a.print()



//? USING ARRAY
// class Stack {
//     constructor() {
//         this.stack = [];
//     }

//     push(data) {
//         this.stack.push(data); 
//     }

//     pop() {
//         if(this.isEmpty()){
//             return;
//         }

//         this.stack.pop();
//     }

//     display() {
//         console.log(this.stack.join(','));
//     }

//     isEmpty() {
//         return this.stack.length == 0;
//     }
// }
// const a = new Stack();
// a.push(10)
// a.push(70)
// a.push(60)
// a.push(80)
// a.pop();
// a.pop();
// a.display();


