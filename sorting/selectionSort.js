///? Selection Sort: Simple but inefficient for large arrays.
//? Time Complexity - O(n^2)
//? Space Complexity - O(1)
function selectionSort(arr) {
    for(let i=0;i<arr.length;i++) {
        let min = i;

        for(let j=i+1;j<arr.length;j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        if(min !== i) {
            [arr[i],arr[min]] = [arr[min],arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([8,4,5,6,1,2,3,7]));


//? sorting in descending order using selection sort
function selectionSort(arr) {
    for(let i=0;i<arr.length;i++) {
        let max = i;

        for(let j=i+1;j<arr.length;j++) {
            if(arr[j] > arr[max]) {
                max = j;
            }
        }

        if(max !== i) {
            [arr[i],arr[max]] = [arr[max],arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([8,4,5,6,1,2,3,7]));
