
//? O(nlogn) on average
//? O(n^2) if poorly implemented or if the pivot is not at a good position.
function quickSort(arr) {

    if(arr.length <= 1) return arr;

    let p = arr[arr.length-1];
    let left = [];
    let right = [];

    for(let i=0;i<arr.length-1;i++) {

        if(arr[i] > p) {
            right.push(arr[i]);
        }else {
            left.push(arr[i]);
        }

    }

    return [...quickSort(left),p,...quickSort(right)];
}
console.log(quickSort([4,3,2,1]));


//? DESCENDING ORDER

function quickSort(arr) {

    if(arr.length <= 1) return arr;

    let p = arr[arr.length-1];
    let left = [];
    let right = [];

    for(let i=0;i<arr.length-1;i++) {

        if(arr[i] < p) {  //* JUST CHECK IF THE ELEMENT IS LESS THAN PIVOT ELEMENT IF IT'S (THE SMALLEST ELEMENTS WILL BE IN THE LAST)
            right.push(arr[i]);
        }else {
            left.push(arr[i]);
        }

    }

    return [...quickSort(left),p,...quickSort(right)];
}
console.log(quickSort([4,3,2,1]));