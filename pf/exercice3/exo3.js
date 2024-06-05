function longestWord(str) {
    const words = str.split(' '); 
    const longest = words.reduce((prev, curr) => {
        return curr.length >= prev.length ? curr : prev;
    }, ''); 
    return longest;
}


console.log(longestWord('a b c d e fgh')); 
console.log(longestWord('one two three')); 
console.log(longestWord('red blue grey')); 
console.log(longestWord('AMX-50Surbaissé AMX-30B2Brenus AMX-50Surblindé AMX-30Acra LeclercSXXIAzure'));
