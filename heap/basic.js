class Heap {
    constructor() {
        this.heap = [];
    }

    getParent(childIndex) {
        return Math.floor((childIndex - 1)/2);
    }

    getLeftChild(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    insert(data) {
        this.heap.push(data);
        this._heapifyUp();
    }

    _heapifyUp() {
        let index = this.heap.length-1;

        while(index > 0 && this.heap[index] > this.heap[this.getParent(index)]) {
            this._swap(index , this.getParent(index));
            index = this.getParent(index);
        }
    }

    _heapifyDown(index = 0) {
        
        while(this.getLeftChild(index) < this.heap.length) {
            let largestIndex = this.getLeftChild(index);

            if(this.getRightIndex(index) < this.heap.length && this.heap[this.getRightIndex(index)] > this.heap[largestIndex]) {
                largestIndex = this.getRightIndex(index);
            }

            if(this.heap[index]  >= this.heap[largestIndex]) {
                break;
            }

            this._swap(index , largestIndex);
            index = largestIndex;
        }
    }


    remove(value) {
        let index = this.heap.indexOf(value);
        if(index == -1) return null;

        if(index == this.heap.length-1) {
            this.heap.pop();
            return;
        }

        let removedElem = this.heap[index];
        let lastElement = this.heap.pop();
        this.heap[index] = lastElement;
        this._heapifyDown(index)

        return removedElem;
    }

    _swap(index1,index2) {
        [this.heap[index1] , this.heap[index2]] = [this.heap[index2] , this.heap[index1]];
    }
}
const hp = new Heap();
hp.insert(5)
hp.insert(22)
hp.insert(45)
hp.insert(12)
hp.insert(18)
hp.insert(54)
hp.remove(18)
console.log(hp);