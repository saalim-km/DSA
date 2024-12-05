//? Time Complexity - O(n^2)
//? Space Complexity - O(1)
// function bubbleSort(arr) {
//     let swapped;

//     do {
//         swapped = false;

//         for(let i=0;i<arr.length;i++) {

//             if(arr[i] > arr[i+1]){
//                 [arr[i] , arr[i+1]] = [arr[i+1] , arr[i]];
//                 swapped = true;
//             }
//         }
//     } while (swapped);

//     return arr;
// }

// console.log(bubbleSort([5,4,3,2,1]));


// ? DESCENDING ORDER BUBBLE SORT
// function bubbleSort(arr) {
//     let swapped;

//     do {
//         swapped = false;

//         for(let i=0;i<arr.length;i++) {

//             if(arr[i] < arr[i+1]){
//                 [arr[i] , arr[i+1]] = [arr[i+1] , arr[i]];
//                 swapped = true;
//             }
//         }
//     } while (swapped);

//     return arr;
// }

// console.log(bubbleSort([6,1,22,5,44,88]));