? FACTORIAL ITERATIVE METHOD
function factorial(n) {
    let result = 1;

    for(let i=1;i<=n;i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));



? FACTORIAL RECURSIVE METHOD
function factorial(n) {
    if(n==0){
        return 1;
    }

    return n * factorial(n-1);
}

console.log(factorial(5));




? LINEAR SEARCH
function linearSearch(target,arr) {
    //* traverse through each elem in the array
    for(let i=0;i<arr.length;i++) {
        if(arr[i]==target) {
            return i; //* return index if the target found
        }
    }

    return -1; //* return -1 if the target not found
}

const arr = [1,2,3,4,5];
console.log(linearSearch(5,arr));




? BINARY SEARCH
function binarySearch(target,arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid]==target) {
            return mid; //*COMPLEXITY IS O(1) IF ITS FOUND IN MID
        }

        if(target > mid) {
            start++;
        }else {
            end--;
        }
    }

    return -1;//* RETURN -1 IF TARGET IS NOT FOUND
}

console.log(binarySearch(3,[1,2,3,4,5]));




? CHECKING THE NUMBER IS PRIME OR NOT
function isPrime(n) {
    if(n < 2) {
        return false;
    }

    for(let i=2;i<n;i++) {
        if(n%i==0){
            return false;
        }
    }

    return true;
}

console.log(isPrime(9));
console.log(isPrime(5));

?  REVESE ARRAY
?  REVRSING WITH NORMAL METHOD
function reverse(arr) {
    return arr.reverse();
}

console.log(reverse([1,2,3,4,5]));




? REVERSE USING RECURSIVE METHOD
function reverseRecursion(arr,start=0,end=arr.length-1) {
    if(start >= end) return arr;

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    return reverseRecursion(arr,start+1,end-1);
}

console.log(reverseRecursion([1,2,3,4,5]));




? BEFORE DOING BINARY SEARCH THE ARRAY SHOULD BE SORTED
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length-1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) {
      return mid;
    }

    if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

const arr = [1,2,3,4];
console.log(binarySearch(arr, 4));





? FACTORIAL ITERATIVE METHOD
function factorial(n) {
    let result = 1;
    for(let i=1;i<=n;i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));




? FIND INDEX WITHOUT INBUILD METHOD
function findIndex(target,arr) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]==target) {
            return i;
        }
    }

    return -1;
}
console.log(findIndex(4,[1,2,3,4,5,6]));



? REVERSE AN ARRAY
function reverseArr(arr) {
    let left = 0;
    let right = arr.length-1;
    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    return arr;
}
let arr = [1,2,3,4,5];
console.log(reverseArr(arr));




? REVERSE ARRAY WITH TWO POINTER
function reverseArr(arr) {
    let start = 0;
    let end = arr.length-1;
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    return arr;
}

console.log(reverseArr([1,2,3,4,5]));



? REMOVE DUPLICATE
function removeDuplicate(arr) {
    const a = [...new Set(arr)]
    return a;
}
console.log(removeDuplicate([1,2,2,3,3,4,5,]));




? REMOVE DUPLICATE WITHOUT INBUILD METHODS
function removeDuplicateNormal(arr) {
    let a = [];
    for(let i=0;i<arr.length;i++) {
        if(!a.includes(arr[i])) {
            a.push(arr[i]);
        }
    }

    return a;
}

console.log(removeDuplicateNormal([1,1,2,2,3,3,4,4,5,6,7,4,3]));




? PALINDROME CHECK
function palindromeRecrusrive(str,s,e) {
    str = str.toLowerCase();
    if(s >= e) {
      return true;
    }

    if(str[s] !== str[e]) {
        return false;
    }

    return palindromeRecrusrive(str,s+1,e-1);
}
let str = 'malayalam';
let s=0;
let e=str.length-1;

console.log(palindromeRecrusrive(str,s,e));



? MAJORITY ELEMENT
function majorityElement(arr) {
    let candidate = 0;
    let count = 0;

    for(let num of arr) {
      if(count == 0) {
        candidate = num;
        count = 1;
      }else if(num == candidate) {
        count++;
      }else {
        count--;
      }
    }

     count = 0;

    for(let num of arr) {
      if(num == candidate) count++;
    }

    return count > Math.floor(arr.length/2) ? candidate : -1;
  }

  console.log(majorityElement([1,2,2,2,2,2,4,4,4,4,4,4,4]))




? FIND LARGEST & SEC-LARGEST , THEN FIND THE DIFFERENCE AND ADD IN TO THE MIDDLE OF THE ARRAY
function insertMiddle(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  }

  const difference = largest - secondLargest;

  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 0, difference);

  return arr;
}

console.log(insertMiddle([1, 2, 3, 4, 5, 6]));



? MAX SUB-ARRAY
function maxSubarraySum(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;
    let start = 0,end = 0,tempStart = 0;

    for(let i=0;i<arr.length;i++) {
        currentSum += arr[i];

        if(currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        if(currentSum < 0) {
            currentSum = 0;
            tempStart = i+1;
        }
    }

    return {
        maxSum,
        subArray : arr.slice(start,end+1),
    }
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(arr));




? PASCAL TO SNAKE-CASE
function pascalToSnake(str) {
  let snakeCase = '';

  for(let i=0;i<str.length;i++) {
    let char = str[i];

    if(char === char.toUpperCase() && char !== char.toLowerCase()) {
      if(i !== 0) {
        snakeCase += '_';
      }

      snakeCase += char.toLowerCase()
    }else {
      snakeCase += char.toLowerCase()
    }
  }

  return snakeCase;
}

console.log(pascalToSnake('LeetCode'))




? STRING TO ARRAY
function strToArr(str) {
  let arr = [];
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ",") {
      word += str[i];
    } else {
      if (word !== "") {
        arr.push(word);
        word = "";
      }
    }
  }

  arr.push(word);

  return arr;
}

let str = "bana,anana,ther,,fig";
console.log(strToArr(str));


//? FIND LONGEST REPEATING CHARACTER , APPROCACH : (POINTER METHOD)
function longestRepeatingChar(str) {
    let maxChar = '';
    let maxCount = 0;
    let currentChar = '';
    let currentCount = 0;

    for(let i=0;i<str.length;i++) {
        if(str[i] == currentChar) {
            currentCount++;
        }else {
            currentChar = str[i];
            currentCount = 1;
        }

        if(currentCount > maxCount) {
            maxChar = currentChar;
            maxCount = currentCount;
        }
    }

    return {maxChar,maxCount}
}
console.log(longestRepeatingChar('aabbb'));



//? TWO SUM , TIME COMPLEXITY : O(n)
function twoSum(arr,target) {
    let map = new Map();
    for(let elem of arr) {
        let compliment = target - elem;

        if(map.has(compliment)) {
            return [map.get(compliment),elem];
        }

        map.set(elem,elem);
    }

    return [];
}

console.log(twoSum([1,2,3,4],4));

console.log('completed_________________________________________________________________________________________________________');