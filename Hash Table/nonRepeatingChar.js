function nonRepeatingChar(str) {
    let table = {};

    for(let char of str) {
        table[char] = (table[char] || 0) + 1;
    }

    for(let char of str) {
        if(table[char] == 1) {
            return char;
        }
    }

    return null;
}
console.log(nonRepeatingChar('!@!@#'));




console.log('completed_________________________________________________________________________________________________________');
