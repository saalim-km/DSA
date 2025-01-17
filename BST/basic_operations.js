class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}


class Tree {
    constructor() {
        this.root = null;
    }

    insert(data) {
      const newNode = new Node(data);

      if(!this.root) {
        this.root = newNode;
        return;
      }

      let temp = this.root;

      while(true) {
        if(newNode.data == temp.data) {
          return;
        }

        if(newNode.data > temp.data) {
          if(!temp.right) {
            temp.right = newNode;
            return;
          }else {
            temp = temp.right;
          }
        }else {
          if(!temp.left) {
            temp.left = newNode;
            return;
          }else {
            temp = temp.left;
          }
        }

      }
    }

    includes(data) {
      let curr = this.root;

      while(curr) {
        if(data > curr.data) {
          curr = curr.right;
        }else if(data < curr.data) {
          curr = curr.left;
        }else {
          return true;
        }
      }

      return false;
    }

    delete(value) {
      this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
      if (!node) return null; // Node not found

      if (value < node.data) {
        node.left = this._deleteNode(node.left, value); // Go to the left subtree
      } else if (value > node.data) {
        node.right = this._deleteNode(node.right, value); // Go to the right subtree
      } else {
        // Node found

        // Case 1: Node is a leaf
        if (!node.left && !node.right) {
          return null;
        }

        // Case 2: Node has one child
        if (!node.left) {
          return node.right; // Replace with right child
        } else if (!node.right) {
          return node.left; // Replace with left child
        }

        // Case 3: Node has two children
        // Find the minimum value in the right subtree (inorder successor)
        let minLargerNode = this._findMin(node.right);
        node.data = minLargerNode.data; // Replace current node's value with the successor
        node.right = this._deleteNode(node.right, minLargerNode.data); // Delete the successor
      }

      return node;
    }

    _findMin(node) {
      while (node.left) {
        node = node.left; // Keep going left to find the smallest value
      }
      return node;
    }

}

const tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(1);
tree.insert(7);
tree.insert(12);
tree.insert(20);

console.log("Tree before deletion:");
console.log(tree);

tree.delete(10); // Node with two children (10 is the root)

console.log("Tree after deleting node 10:");
console.log(tree);












class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class Bst {
    constructor(){
        this.root = null;
    }

    insert(data) {
        if(!this.root) {
            this.root = new Node(data);
            return;
        }

        let temp = this.root;
        while(true) {
            if(data == temp.data) return;

            if(data > temp.data) {
                if(!temp.right) {
                    temp.right = new Node(data);
                    return;
                }else{
                    temp = temp.right;
                }
            }else if(data < temp.data) {
                if(!temp.left) {
                    temp.left = new Node(data);
                    return;
                }else{
                    temp = temp.left;
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

    remove(data) {
        this.root = this._deleNode(this.root , data);
    }

    _deleNode(node,data) {
        if(!node) return null;

        if(data > node.data) {
            node.right = this._deleNode(node.right , data);
        }else if(data < node.data) {
            node.left = this._deleNode(node.left , data);
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
            this._deleNode(node.right , minValue.data);
        }

        return node;
    }

    findMin(node) {
        while(node.left) {
            node = node.left;
        }
        return node;
    }
}

const bst = new Bst();
bst.insert(50);
bst.insert(20);
bst.insert(60);
bst.remove(20);
bst.remove(60);
console.log(bst);

console.log('completed_________________________________________________________________________________________________________');
