// Reverse a string
function reverseString(word){
    let reversedWord = '';
    let letter;
    for(let i = word.length - 1; i >= 0; i--){
        letter = word[i];
        reversedWord += letter;
    }
    return reversedWord;
}
console.log(reverseString("Sany!"));