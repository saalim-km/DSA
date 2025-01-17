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





// ? Heap sort
function heapSort(arr) {
  let n = arr.length;

  for(let i = Math.floor(n/2)-1 ; i >= 0 ; i--) {
    heapify(arr,n,i)
  }

  for(let i = n-1 ; i > 0 ; i--) {
    [arr[0] , arr[i]] = [arr[i] , arr[0]];
    heapify(arr,i,0);
  }

  return arr;
}

function heapify(arr,n,i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if(left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if(right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if(largest !== i) {
    [arr[i] , arr[largest]] = [arr[largest] , arr[i]];

    heapify(arr , n , largest);
  }
}

console.log(heapSort([5,4,3,2,1]));