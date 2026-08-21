//Count vowels in a string

function countVowels(string){
    let count = 0;
    let vowels = "aeiou"
    for(let i = 0; i < string.length; i++){
        let letter = string[i];
        console.log("i == >", i, "letter == >", letter);
        if(vowels.includes(letter)){
            console.log("vowel");
            count++;
        }
    }
    return count;
}
let vowelCount = countVowels("I love programming");
console.log("vowelCount == >", vowelCount);