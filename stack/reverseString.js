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
console.log(reverseStringUsingStack('hello'));