// // //? APPEND
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkdedList {
//     constructor() {
//         this.head=null;
//         this.length=0;
//     }

//     size() {
//         return this.length;
//     }

//     prepend(data) {
//         const newNode = new Node(data);
//         if(!this.head) {
//             this.head=newNode;
//             this.length++;
//             return;
//         }

//         newNode.next=this.head;
//         this.head=newNode;
//         this.length++;
//     }

//     append(data) {
//         const newNode = new Node(data);
//         if(!this.head) {
//             this.head=newNode;
//             this.length++;
//             return;
//         }

//         let curr = this.head;
//         while(curr.next) {
//             curr = curr.next;
//         }

//         curr.next = newNode;
//         this.length++;
//     }

//     addAt(index,data) {
//         const length = this.size();
//         const newNode = new Node(data);

//         if(index < 0 || index > length) {
//             console.log('index not found');
//             return;
//         }

//         if(index==1) {
//             newNode.next = this.head;
//             this.head = newNode;
//             return;
//         }

//         let prev = null;
//         let curr = this.head;

//         for(let i=1;i<=length;i++) {
//             if(i==index) {
//                 prev.next = newNode;
//                 newNode.next = curr;
//             }
//             prev = curr;
//             curr = curr.next;
//         }
//     }

//     removeFirst() {
//         if(!this.head) {
//             console.log('no items to delete');
//             return;
//         }

//         this.head = this.head.next;
//     }

//     removeLast() {
//         if(!this.head) {
//             console.log('no items to delete');
//             return;
//         }

//         let prev = null;
//         let curr = this.head;
//         while(curr.next) {
//             prev=curr;
//             curr=curr.next;
//         }

//         prev.next=null;
//     }

//     removeMiddle() {
//         if(!this.head) {
//             console.log('list is empty');
//             return;
//         }

//         let prev = null;
//         let slow = this.head;
//         let fast = this.head;

//         while(fast && fast.next) {
//             prev = slow;
//             slow = slow.next;
//             fast = fast.next.next;
//         }

//         prev.next = slow.next;

//     }

//     reverse() {
//         if(!this.head) {
//             console.log('list is empty');
//             return;
//         }

//         let prev=null;
//         let curr=this.head;
//         let next=null;

//         while(curr) {
//             next=curr.next;
//             curr.next=prev;
//             prev = curr;
//             curr = next;
//         }

//         this.head=prev;
//     }

//     deleteAt(index) {
//         if(!this.head) {
//             console.log('list is empty');
//             return;
//         }

//         if(index==1) {
//             this.head=this.head.next;
//             return;
//         }


//         let prev = null;
//         let curr = this.head;
//         for(let i=1;i<index;i++) {
//             prev = curr;
//             curr = curr.next;
//         }

//         prev.next = curr.next;
//     }

//     printList() {
//         let curr = this.head;
//         while(curr) {
//             console.log(curr.data);
//             curr = curr.next;
//         }
//     }

// }


// const a = new LinkdedList();
// a.append(10);
// a.prepend(20);
// a.addAt(2,35);
// a.removeMiddle();
// a.printList();








// function checkDuplicate(arr) {
//     let set = [...new Set(arr)]
//     if(set.length !== arr.length){
//         return true;
//     }else{
//         return false;
//     }
// }

// let arr = [1,2,2,3,4,5,4,3,];
// console.log(checkDuplicate(arr))



// function findDuplicateOdd(arr) {
//     let map = new Map();
//     let array = [];
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i]%2 !== 0){
//             if(map.has(arr[i])){
//                 array.push(arr[i]);
//             }else{
//                 map.set(arr[i],true);
//             }
//         }
//     }
    
//     return array;
// }

// let arr = [1,1,2,3,3,4,5,5,6,7,8,9,9];
// console.log(findDuplicateOdd(arr));


// function reverseArr(arr) {
//     let start = 0;
//     let end = arr.length-1;
//     let mid = Math.floor((start + end) / 2);
//     for(let i=0;i<=mid;i++){
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
    
//     return arr;
// }

// let arr = [1,2,3,4,5];
// console.log(reverseArr(arr))





// function frequenzy(arr) {
//     let map = new Map();
//     for(let i=0;i<arr.length;i++){
//         if(map.has(arr[i])){
//             map.set(arr[i] , map.get(arr[i]) + 1);
//         }else{
//             map.set(arr[i] , 1);
//         }
//     }
    
//     return map;
// }

// let arr = [1,1,2,2,3,3,4,4,4,5,5,7,7];
// console.log(frequenzy(arr));


// function insertAtIndex(arr, index, value) {
//     // Your code here
//     for(let i=arr.length-1;i>=index;i--){
//         arr[i+1] = arr[i];
//     }
    
//     arr[index] = value;
    
//     return arr;
        
// }

// let arr = [1,2,3,4,5];
// console.log(insertAtIndex(arr,2,45))



// function removeElement(arr,value) {
    
// }




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
//       return this.length;
//     }

//     prepend(data) {
//         const newNode = new Node(data);
//         if(!this.head ){
//             this.head = newNode;
//             this.length++;
//             return;
//         }
        
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//     }

//     append(data) {
//       const newNode = new Node(data);
//       if(!this.head) {
//         this.head = newNode;
//         this.length++;
//         return;
//       }

//      let curr = this.head;
//      while(curr.next) {
//       curr = curr.next;
//      }

//      curr.next = newNode;
//      this.length++;
//     }

//     deleteFirst() {
//       this.head = this.head.next;
//       this.length--;
//     }

//     deleteLast() {
//       let prev = null;
//       let curr = this.head;
//       while(curr.next) {
//         prev = curr;
//         curr = curr.next;
//       }

//       prev.next = null;
//       this.length--;
//     }

//     addAt(index,data) {
//       let newNode = new Node(data);
      
//       let prev = null;
//       let curr = this.head;
      
//       for(let i=0;i<index;i++){
//         prev = curr;
//         curr = curr.next;
//       }
      
//       prev.next = newNode
//       newNode.next = curr;
//       this.length++;
      
//     }
    
//     removeAt(index) {
//       if(index==0){
//         this.head = this.head.next;
//         this.length--;
//         return;
//       }
      
//       let prev = null;
//       let curr = this.head;
      
//       for(let i=0;i<index;i++){
//         prev = curr;
//         curr = curr.next;
//       }
      
//       prev.next = curr.next;
//     }

//     findMiddle() {
//        let prev = null;
//        let slow = this.head;
//        let fast = this.head;
      
//         while(fast && fast.next) {
//           prev=slow;
//           slow=slow.next;
//           fast=fast.next.next;
//         }
        
//         console.log('this is middle',slow.data)
//     }
    
//     removeMiddle() {
//       let prev = null;
//       let slow = this.head;
//       let fast = this.head;
//       while(fast && fast.next) {
//         prev = slow;
//         slow = slow.next;
//         fast = fast.next.next;
//       }
      
//       prev.next = slow.next;
//       this.length--;
//     }
    
//     addMiddle(data) {
//       const newNode = new Node(data);
      
//       let prev = null;
//       let slow = this.head;
//       let fast = this.head;
      
//       while(fast && fast.next) {
//         prev = slow;
//         slow = slow.next;
//         fast = fast.next.next;
//       }
      
//       prev.next = newNode;
//       newNode.next =slow; 
//     }
    
//     reverse() {
//       let prev = null;
//       let curr = this.head;
//       let next = null;
      
      
//     }
//     print() {
//       let curr = this.head;
//       while(curr) {
//         console.log(curr.data);
//         curr = curr.next;
//       }
//     }
    
// }


// const a = new LinkedList();
// a.prepend(40);
// a.prepend(55);
// a.append(60);
// a.append(90);
// a.addAt(2,50)
// a.removeAt(2);
// a.addAt(1,8);
// a.removeMiddle();
// a.addMiddle(40);
// a.findMiddle();
// a.print();





class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkdedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    console.log(this.head)
  }

  addLast(data) {
    
  }
}

const a = new LinkdedList();

a.addirst(10);
a.addirst(20);