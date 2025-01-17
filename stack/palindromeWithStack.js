//? PALINDROME CHECKING USING STACK 
function isPalindrome(str) {
    let stack = [];

    for(let char of str) {
        stack.push(char);
    }

    for(let char of str) {
        if(stack.pop() !== char) {
            return false;
        }
    }

    return true;
}
console.log(isPalindrome('madam'));


console.log('completed_________________________________________________________________________________________________________');
