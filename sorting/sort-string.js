//? sorting characters in string
function mergeSort(str) {
    if(str.length <= 1) return str;

    let mid = Math.floor(str.length / 2);
    let left = mergeSort(str.slice(0,mid));
    let right = mergeSort(str.slice(mid));

    return merge(left,right);
}

function merge(left,right) {
    let sortedArr = [];
    let leftarr = left.split('');
    let rightArr = right.split('');

    while(leftarr.length && rightArr.length) {

        if(leftarr[0] < rightArr[0]) {
            sortedArr.push(leftarr.shift());
        }else {
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr,...leftarr,...rightArr].join('');
}

console.log(mergeSort('mergeSortExample'));




console.log('completed_________________________________________________________________________________________________________');