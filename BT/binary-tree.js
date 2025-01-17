class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insertNode(value){
        if(!this.root){
            this.root = new TreeNode(value);
            return
        }

        const queue = [this.root];
        while(queue.length){
            const current = queue.shift();
            if(!current.left){
                current.left = new TreeNode(value)
                return
            }else{
                queue.push(current.left)
            }

            if(!current.right){
                current.right = new TreeNode(value)
                return
            }else{
                queue.push(current.right)
            }
        }
    }

    contains(value){
        if(!this.root) return false

        const queue = [this.root];
        while(queue.length){
            const current = queue.shift();
            if(current.value === value) return true
            if(current.left){
                if( current.left.value === value)return true
                queue.push(current.left)
            }

            if(current.right){
                if( current.right.value === value)return true
                queue.push(current.right)
            }
        }
        return false
    }

    levelOrderTraversal(){
        const result = [];
        const queue = [this.root];
        while(queue.length){
            const current = queue.shift();
            result.push(current.value)
            if(current.left){
                queue.push(current.left)
            }

            if(current.right){
                queue.push(current.right)
            }
        }
        return result
    }

    inOrderTraversal(node = this.root , result = []){
        if(node){
            this.inOrderTraversal(node.left , result);
            result.push(node.value);
            this.inOrderTraversal(node.right , result);
        }
        return result
    }

    preOrderTraversal(node = this.root , result = []){
        if(node){
            result.push(node.value);
            this.preOrderTraversal(node.left , result);
            this.preOrderTraversal(node.right , result);
        }
        return result
    }
    
    postOrderTraversal(node = this.root , result = []){
        if(node){
            this.postOrderTraversal(node.left , result);
            this.postOrderTraversal(node.right , result);
            result.push(node.value);
        }
        return result
    }
}

const bt = new BinaryTree();

bt.insertNode(6)
bt.insertNode(2)
bt.insertNode(7)
bt.insertNode(1)
bt.insertNode(10)
bt.insertNode(5)




console.log('completed_________________________________________________________________________________________________________');
