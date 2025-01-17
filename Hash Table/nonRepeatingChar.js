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
<<<<<<< HEAD




console.log('completed_________________________________________________________________________________________________________');
=======
>>>>>>> 4faf37f33a2f8517f46d3854a0d1354a60d5c3e6
