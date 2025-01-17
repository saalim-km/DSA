// class Node {
//     constructor(data) {
//         this.data = data;
//         this.right = null;
//         this.left = null;
//     }
// }

const nodemon = require("nodemon");

// class Bst {
//     constructor(){
//         this.root = null;
//     }

//     insert(data) {
//         if(!this.root) {
//             this.root = new Node(data);
//             return ;
//         }

//         let current = this.root;
//         while(true) {
//             if(data == current.data) {
//                 return;
//             }

//             if(data  >current.data) {
//                 if(!current.right) {
//                     current.right = new Node(data);
//                     return;
//                 }else {
//                     current = current.right;
//                 }
//             }else if(data < current.data) {
//                 if(!current.left) {
//                     current.left = new Node(data);
//                 }else {
//                     current = current.left;
//                 }
//             }
//         }
//     }

//     isBst(node = this.root , min = -Infinity , max = Infinity) {
//         if(!node) {
//             return true;
//         }

//         if(node.data < min || node.data > max) {
//             return false;
//         }

//         return (
//             this.isBst(node.left , min , node.data) &&
//             this.isBst(node.right , node.data , max)
//         );
//     }
// }

// const bst = new Bst();
// bst.insert(10)
// bst.insert(40)
// bst.insert(20)
// // bst.insert(40)
// console.log(bst.isBst());

// class Heap {
//     constructor(){
//         this.heap = [];
//     }

//     getParent(childIndex) {
//         return Math.floor((childIndex-1) / 2);
//     }

//     getLeftChild(parentIndex) {
//         return 2 * parentIndex + 1;
//     }

//     getRightChild(parentIndex) {
//         return 2 * parentIndex + 2;
//     }

//     insert(data) {
//         this.heap.push(data);
//         this.heapifyUp()
//     }

//     heapifyUp() {
//         let index = this.heap.length-1;
//         while(index > 0 && this.heap[index] < this.heap[this.getParent(index)]) {
//             this.swap(index , this.getParent(index));
//             index = this.getParent(index);
//         }
//     }

//     swap(index1,index2) {
//         [this.heap[index1] , this.heap[index2]] = [this.heap[index2] , this.heap[index1]];
//     }

//     remove() {
//         let index = 0;
//         let lastElem = this.heap.pop();
//         this.heap[index] = lastElem;
//         this.heapifyDown(index);
//     }

//     heapifyDown(index) {
//         while(this.getLeftChild(index) < this.heap.length) {
//             let largestIndex = this.getLeftChild(index);

//             if(this.getRightChild(index) < this.heap.length && this.heap[this.getRightChild(index)] < this.heap[this.getLeftChild(index)]) {
//                 largestIndex = this.getRightChild(index);
//             }

//             if(this.heap[index] < this.heap[largestIndex]) {
//                 break;
//             }

//             this.swap(index,largestIndex);
//         }
//     }
// }

// const heap = new Heap()
// heap.insert(50);
// heap.insert(30);
// heap.insert(60);
// heap.insert(90)
// console.log(heap.heap);



// class Node {
//     constructor() {
//         this.children = {};
//         this.endOfWord = false;
//     }
// }

// class Trie {
//     constructor(){
//         this.root = new Node();
//     }

//     insert(word) {
//         let current = this.root;
//         for(let char of word) {
//             if(!current.children[char]) {
//                 current.children[char] = new Node();
//             }
//             current = current.children[char];
//         }
//         current.endOfWord = true;
//     }

//     search(word) {
//         let current = this.root;
//         for(let char of word) {
//             if(!current.children[char]) {
//                 return false;
//             }
//             current = current.children[char];
//         }
//         if(current.endOfWord) {
//             return true;
//         }else {
//             return false;
//         }
//     }
// }

// const trie = new Trie()
// trie.insert('hello')
// trie.insert('help')
// console.log(trie.search('root'));
// console.log(trie);



// graph = {
//     'A': {'B', 'C'},
//     'B': {'A', 'D', 'E'},
//     'C': {'A', 'F'},
//     'D': {'B'},
//     'E': {'B', 'F'},
//     'F': {'C', 'E'}
// }

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if(!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(vtx1,vtx2) {
        if(!this.adjList[vtx1]) {
            this.adjList[vtx1] = [];
        }

        if(!this.adjList[vtx2]) {
            this.adjList[vtx2] = [];
        }

        if(!this.adjList[vtx1].includes(vtx2)) {
            this.adjList[vtx1].push(vtx2)
        }

        if(!this.adjList[vtx2].includes(vtx1)) {
            this.adjList[vtx2].push(vtx1)
        }
    }

    bfs(start) {
        let result = [];
        let visitedVertices = new Set()
        let queue = [start];
        while(queue.length) {
            let vertex = queue.shift();
            if(!visitedVertices.has(vertex)) {
                visitedVertices.add(vertex);
                result.push(vertex);

                this.adjList[vertex].forEach((v)=> {
                    if(!visitedVertices.has(v)) {
                        queue.push(v);
                    }
                })
            }
        }
        return result;
    }

    dfs(start) {
        let result = [];
        let visitedVertices = new Set();
        let stack = [start];
        while(stack.length) {
            let vertex = stack.pop();
            if(!visitedVertices.has(vertex)) {
                result.push(vertex);
                visitedVertices.add(vertex);

                this.adjList[vertex].forEach((v)=> {
                    if(!visitedVertices.has(v)) {
                        stack.push(v)
                    }
                })
            }
        }
        return result;
    }
}

const graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('B','E');
graph.addEdge('C','F');
graph.addEdge('D','B');
graph.addEdge('E','B');
graph.addEdge('E','F');
graph.addEdge('F','C');
graph.addEdge('F','E');
console.log(graph.bfs('A'));
console.log(graph.dfs('A'));
console.log(graph);