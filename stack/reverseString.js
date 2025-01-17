function reverseStringUsingStack(str) {
    let reversedStr = '';
    let stack = [];
    for(let char of str) {
        stack.push(char);
    }

    while(stack.length > 0) {
        reversedStr += stack.pop()
    }

    return reversedStr;
}
<<<<<<< HEAD
console.log(reverseStringUsingStack('hello'));


console.log('completed_________________________________________________________________________________________________________');
=======
console.log(reverseStringUsingStack('hello'));
>>>>>>> 4faf37f33a2f8517f46d3854a0d1354a60d5c3e6
