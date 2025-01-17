// class Node {
//     constructor(data) {
//         this.data = data;
//         this.right = null;
//         this.left = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     insert(data) {
//         if(!this.root) {
//             this.root = new Node(data);
//             return;
//         }

//         let current = this.root;
//         while(true) {
//             if(current.data == data) {
//                 return;
//             }

//             if(data > current.data) {
//                 if(!current.right) {
//                     current.right = new Node(data);
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

//     contains(data) {
//         let current = this.root;
//         while(current) {
//             if(data > current.data) {
//                 current = current.right;
//             }else if(data < current.data) {
//                 current = current.left;
//             }else {
//                 return true;
//             }
//         }

//         return false;
//     }

//     remove(value) {
//         this.root = this._deleteNode(this.root, value);
//     }

//     _deleteNode(node,data) {
//         if(!node) return null;

//         if(data > node.data) {
//             node.right = this._deleteNode(node.right, data);
//         }else if(data < node.data) {
//             node.left = this._deleteNode(node.left, data);
//         }else {

//             if(!node.left && !node.right) {
//                 return null;
//             }

//             if(!node.left) {
//                 return node.right;
//             }else if(!node.right) {
//                 return node.left;
//             }

//             let minValue = this.findMin(node.right);
//             node.data = minValue.data;
//             node.right = this._deleteNode(node.right , minValue.data);
//         }

//         return node;
//     }

//     bfs() {
//         let result = [];
//         let queue = [this.root];
//         while(queue.length) {
//             let current = queue.shift();
//             result.push(current.data);

//             if(current.left) {
//                 queue.push(current.left);
//             }
//             if(current.right) {
//                 queue.push(current.right);
//             }
//         }
//         return result;
//     }

//     inOrderTraversal(node = this.root , result = []) {
//         if(node) {
//             this.inOrderTraversal(node.left , result);
//             result.push(node.data);
//             this.inOrderTraversal(node.right , result);
//         }
//         return result;
//     }

//     preOrder(node = this.root , result = []) {
//         if(node) {
//             result.push(node.data);
//             this.preOrder(node.left , result);
//             this.preOrder(node.right , result);
//         }
//         return result;
//     }

//     postOrder(node = this.root , result = []) {
//         if(node) {
//             this.postOrder(node.left , result);
//             this.postOrder(node.right , result);
//             result.push(node.data);
//         }
//         return result;
//     }

//     findMin(node) {
//         while(node.left) {
//             node = node.left;
//         }
//         return node;
//     }

//     isBst(node , min = -Infinity , max = Infinity) {
//         if(!node) {
//             return true;
//         }

//         if(node.data <= min ||  node.data >= max) {
//             return false;
//         }

//         return (
//             this.isBst(node.left , min ,  node.data) &&
//             this.isBst(node.right , node.data , max)
//         )
//     }

//     findClosest(target) {
//         let closest = this.root.data;
//         let current = this.root;

//         while(current) {
//             if(Math.abs(current.data - target) < Math.abs(closest - target)) {
//                 closest = current.data;
//             }

//             if(target > current.data) {
//                 current = current.right;
//             } else if(target < current.data) {
//                 current = current.left;
//             } else {
//                 break;
//             }
//         }

//         return closest;
//     }
    
//     isBalanced() {
//         function getHeight(node) {
//             if(!node) {
//                 return 0;
//             }

//             let leftHeight = getHeight(node.left);
//             let rightHeight = getHeight(node.right);

//             if(leftHeight == -1 || rightHeight == -1) {
//                 return -1;
//             }

//             if(Math.abs(leftHeight - rightHeight) > 1) {
//                 return -1;
//             }

//             return Math.max(leftHeight , rightHeight) + 1;
//         }

//         return getHeight(this.root) !== -1;
//     }
// }

// const bst = new BST();
// bst.insert(10);
// bst.insert(8);
// bst.insert(20);
// bst.insert(6);
// console.log(bst.bfs());
// console.log(bst.inOrderTraversal());
// console.log(bst.preOrder());
// console.log(bst.postOrder());
// console.log(bst.isBst(bst.root));
// console.log(bst.isBalanced());
// console.log(bst);



// class Graph {
//     constructor(){
//         this.adjList = {};
//     }

//     addVertex(vertex) {
//         if(!this.adjList[vertex]) {
//             this.adjList[vertex] = [];
//             return;
//         }
//     }

//     addEdge(vtx1,vtx2) {
//         if(!this.adjList[vtx1]) {
//             this.adjList[vtx1] = [];
//         }
//         if(!this.adjList[vtx2]) {
//             this.adjList[vtx2] = [];
//         }

//         if(!this.adjList[vtx1].includes(vtx2)) {
//             this.adjList[vtx1].push(vtx2);
//         }

//         if(!this.adjList[vtx2].includes(vtx1)) {
//             this.adjList[vtx2].push(vtx1);
//         }
//     }

//     removeVertex(vertex1){
//         while(this.adjList[vertex1].length > 0) {
//             let connectedvertex = this.adjList[vertex1].pop();
//             this.removeEdge(vertex1,connectedvertex);
//         }
//         delete this.adjList[vertex1];
//     }

//     removeEdge(vtx1,vtx2) {
//         this.adjList[vtx1] = this.adjList[vtx1].filter((v)=> 
//             v !== vtx2
//         );

//         this.adjList[vtx2] = this.adjList[vtx2].filter((v)=> 
//             v !== vtx1
//         );
//     }

//     bfs(start) {
//         let queue = [start];
//         let visitedVertices = new Set();
//         let result = [];
//         while(queue.length) {
//             let vertex = queue.shift();
//             if(!visitedVertices.has(vertex)) {
//                 visitedVertices.add(vertex);
//                 result.push(vertex);

//                 this.adjList[vertex].forEach((v)=> {
//                     if(!visitedVertices.has(v)) {
//                         queue.push(v);
//                     }
//                 })
//             }
//         }
//         return result;
//     }

//     dfs(start) {
//         let stack = [start];
//         let result = [];
//         let visitedVertices = new Set();
//         while(stack.length) {
//             let vertex = stack.pop();
//             if(!visitedVertices.has(vertex)) {
//                 visitedVertices.add(vertex);
//                 result.push(vertex);

//                 this.adjList[vertex].forEach((v)=> {
//                     if(!visitedVertices.has(v)) {
//                         stack.push(v);
//                     }
//                 })
//             }
//         }

//         return result;
//     }
// }
// const graph = new Graph()
// graph.addVertex('A') 
// graph.addVertex('B') 
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('C','B')
// graph.addEdge('B','C')
// graph.addEdge('D','A')
// console.log(graph.bfs('A'));
// console.log(graph.dfs('A'));
// console.log(graph.adjList);

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

//     insertWord(word) {
//         let current = this.root;
//         for(let char of word) {
//             if(!current.children[char]) {
//                 current.children[char] = new Node();
//             }
//             current = current.children[char];
//         }
//         current.endOfWord = trie;
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
//             return true
//         }else {
//             return false;
//         }
//     }

//     remove(word) {
//         function removeWorldHelper(node,word,depth) {
//             if(!node) {
//                 return false;
//             }

//             if(depth == word.length) {
//                 if(!node.endOfWord) {
//                     return false;
//                 }

//                 node.endOfWord = false;
//                 return Object.keys(node.children).length == 0;
//             }

//             let char = word[depth];
//             const shouldBeRemoved = removeWorldHelper(
//                 node.children[char],
//                 word,
//                 depth+1
//             )

//             if(shouldBeRemoved) {
//                 delete node.children[char];
//             }

//             return Object.keys(node.children).length == 0 && !node.endOfWord;
//         }
//         removeWorldHelper(this.root , word , 0);
//     }

//     autoComplete(prefix) {
//         const result = [];
//         function dfs(node,path) {
//             if(node.endOfWord) {
//                 result.push(path);
//             }

//             for(let char in node.children) {
//                 dfs(node.children[char] , path + char);
//             }
//         }

//         let current = this.root;
//         for(let char of prefix) {
//             if(!current.children[char]) {
//                 return [];
//             }
//             current = current.children[char];
//         }
//         dfs(current , prefix);
//         return result;
//     }

//     longestPrefix(prefix) {
//         let longestPrefix = '';
//         let current = this.root;

//         for(let char of prefix) {
//             if(current.children[char]) {
//                 longestPrefix += char;
//             }else {
//                 break;
//             }
//             current = current.children[char];
//         }

//         return longestPrefix;
//     }
// }

// const trie = new Trie()
// trie.insertWord('hello');
// trie.insertWord('hell');
// trie.insertWord('help');
// console.log(trie.search('hel'));
// console.log(trie.autoComplete('hell'));
// console.log(trie.longestPrefix(''));
// console.log(trie);





class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if(!this.root) {
            this.root = new Node(data);
            return;
        }

        let current = this.root;
        while(true) {
            if(current.data == data) {
                return;
            }

            if(data > current.data) {
                if(!current.right) {
                    current.right = new Node(data);
                }else {
                    current = current.right;
                }
            }else if(data < current.data) {
                if(!current.left) {
                    current.left = new Node(data);
                }else {
                    current = current.left;
                }
            }
        }
    }

    contains(data) {
        let current = this.root;
        while(current) {
            if(data > current.data) {
                current = current.right;
            }else if(data < current.data) {
                current = current.left;
            }else {
                return true;
            }
        }

        return false;
    }

    remove(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node,data) {
        if(!node) return null;

        if(data > node.data) {
            node.right = this._deleteNode(node.right, data);
        }else if(data < node.data) {
            node.left = this._deleteNode(node.left, data);
        }else {

            if(!node.left && !node.right) {
                return null;
            }

            if(!node.left) {
                return node.right;
            }else if(!node.right) {
                return node.left;
            }

            let minValue = this.findMin(node.right);
            node.data = minValue.data;
            node.right = this._deleteNode(node.right , minValue.data);
        }

        return node;
    }

    bfs() {
        let result = [];
        let queue = [this.root];
        while(queue.length) {
            let current = queue.shift();
            result.push(current.data);

            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right);
            }
        }
        return result;
    }

    inOrderTraversal(node = this.root , result = []) {
        if(node) {
            this.inOrderTraversal(node.left , result);
            result.push(node.data);
            this.inOrderTraversal(node.right , result);
        }
        return result;
    }

    preOrder(node = this.root , result = []) {
        if(node) {
            result.push(node.data);
            this.preOrder(node.left , result);
            this.preOrder(node.right , result);
        }
        return result;
    }

    postOrder(node = this.root , result = []) {
        if(node) {
            this.postOrder(node.left , result);
            this.postOrder(node.right , result);
            result.push(node.data);
        }
        return result;
    }

    findMin(node) {
        while(node.left) {
            node = node.left;
        }
        return node;
    }

    findHeight(node = this.root) {
        if(!node) {
            return -1;
        }

        let leftHeight = this.findHeight(node.left);
        let rightHeight = this.findHeight(node.right);


        return Math.max(leftHeight , rightHeight) + 1;
    }

    findDepth(data) {
        let current = this.root;
        let depth = 0;
        while(current) {
            if(data == current.data) {
                return depth;
            }else if(data > current.data) {
                current = current.right;
            }else {
                current = current.left;
            }
            depth++;
        }

        return -1;
    }

    isBalanced(node = this.root) {
        if(!node) {
            return true;
        }

        let heightDiff = Math.abs(this.findHeight(node.left) - this.findHeight(node.right));

        if(heightDiff > 1) {
            return false;
        }

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    findClosest(target) {
        let current = this.root;
        let closest = this.root.data;

        while(current) {
            if(Math.abs(current.data - target)  < Math.abs(closest - target)) {
                closest = current.data;
            } 

            if(target > current.data) {
                current = current.right;
            }else if(target < current.data) {
                current = current.left;
            }else {
                break;
            }
        }

        return closest;
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(8);
bst.insert(20);
bst.insert(6);
// bst.insert(4)
console.log(bst.findDepth(20));
console.log(bst.findHeight());
console.log(bst.isBalanced());
console.log(bst.findClosest());