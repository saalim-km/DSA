//?  CHEK  A STRING IS PALINDROME OR NOT WITH ITERATIVE METHOD
//?  USING TWO POINTER METHOD 
//?  BOTH TIME && SPACE COMPLEXITY IS O(N)

function palindromCheck(word) {  
    word = word.toLowerCase();
    let start = 0;
    let end = word.length-1;
    while(start < end) {
        if(word[start] !== word[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(palindromCheck('madam'));





//?  USING RECURSIVE METHOD
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





//?  REVERSE STRING 
//?  USING INBUILD REVERSE METHOD

function reverse(str) {
    return str.split('').reverse().join('');
}

console.log(reverse('hello'));






//?  USING TWO POINTER METHOD
//?  TIME && SPACE COMPLEXITY IS O(n)

function reverseNormal(str) {
    let arr=str.split('');
    let left=0;
    let right=arr.length-1;
    
    while(left<right) {
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--;
    }

    return arr.join('');
}

console.log(reverseNormal('malayalam'));




//?  USING RECURSIVE METHOD
//?  TIME COMPLEXITY : O(n).
//?  SPACE COMPLEXITY : O(n).

function reverRecusrion(str) {
    if(str.length <= 1) return str;

    return reverRecusrion(str.slice(1)) + str[0];
}

console.log(reverRecusrion('hello world'));






 //? FUCTION TO REMOVE VOWELS 
function removeVowels(str) {
    let vowels = ['a','e','i','o','u'];
    for(let i=0;i<str.length;i++) {
        if(vowels.includes(str[i].toLowerCase())) {
            str = str.replace(str[i],'');
        }
    }

    return str;
}

console.log(removeVowels('hello world'));






// ? FUNCITON TO CHECK IF A STRING IS PALINDROME
function palindromeRecursive(str,s,e) {
    str = str.toLowerCase();
    if(s>=e) {
        return true;
    }

    if(str[s] !== str[e]) {
        return false;
    }

    return palindromeRecursive(str,s+1,e-1);
}

const str = 'malayalam';
const s = 0;
const e = str.length-1;
console.log(palindromeRecursive(str,s,e));


//? Find how many time each character is repeating in string
function countChar(str) {
    let map = new Map();
    for(let i=0;i<str.length;i++) {
        if(map.has(str[i])){
            map.set(str[i],map.get(str[i])+1);
        }else{
            map.set(str[i],1);
        }
    }

    return map;
}
console.log(countChar('datastructure'));





//? REVERSE WORDS IN A STRING
// HELLO WORLD -> OLLEH DLROW

function reverseWOrd(str){
    let result = '';
    let word = '';

    for(let i=0;i<=str.length;i++) {
        if(str[i] == ' ' || i == str.length){ // * check if the i reaches the length of the string or space.
            for(let i=word.length-1;i>=0;i--) {
                result += word[i];
            }

            if(i !== str.length) result+= ' ';

            word = '';
        }

        word += str[i];
    }

    
    return result;
}
console.log(reverseWOrd('HELLO WORLD'));
<<<<<<< HEAD



console.log('completed_________________________________________________________________________________________________________');
=======
>>>>>>> 4faf37f33a2f8517f46d3854a0d1354a60d5c3e6
