// ? FIBONACCI RECURSIVE METHOD
// function fibonacci(n) {
//   if(n==0) return 0;
//   if(n==1) return 1;

//   return fibonacci(n-1) + fibonacci(n-2);
// }

// console.log(fibonacci(6))

//? FACTORIAL
// function factorial(n) {
//   if(n===0) {
//     return 1;
//   }

//   return n * factorial(n-1);
// }
// console.log(factorial(5));

// ? PALINDROME
// function palindromeRecrusrive(str,s,e) {
//   if(s >= e) {
//     return true;
//   }

//   if(str[s] !== str[e]) {
//     return false;
//   }

//   return true;
// }

// let str = 'hello';
// console.log(palindromeRecrusrive(str,0,str.length-1));

// ? REVERSE A STRING
// function reverseRecursive(str) {
//   if(str.length <= 1) return str;

//   return reverseRecursive(str.slice(1)) + str[0];
// }

// console.log(reverseRecursive('hello'))


// ? SUM ARRAY  
// function sumArray(arr,index = 0) {
//   if(index == arr.length) {
//     return 0;
//   }


//   return arr[index] + sumArray(arr,index + 1);
// }  
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(sumArray(arr));