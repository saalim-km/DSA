//?  Insertion Sort: Good for small or partially sorted arrays. O(n^2)
//?  Time Complexity - O(n^2)
//?  Space Complexity - O(1) 

function insertionSort(arr) {
  
    for(let i=1;i<arr.length;i++) {
      let key = arr[i];
      let j = i-1;
      
      while(j >= 0 && arr[j] > key) {
        arr[j+1] = arr[j];
        j--;
      }
      
      arr[j+1] = key;
    }
    
    
    return arr;
  }
  
  console.log(insertionSort([5,4,3,2,1]));


// ? DESCENDING ORDER WITH INSERTION SORT
function insertionDescending(arr) {
    for(let i=1;i<arr.length;i++) {
        let key = arr[i];
        let j = i-1;

        while(j >= 0 && arr[j] < key) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = key;

    }

    return arr;
}
console.log(insertionDescending([1,2,3,4,5]));


console.log('completed_________________________________________________________________________________________________________');
