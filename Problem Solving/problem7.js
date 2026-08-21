//Check if a string is a palindrome or not
function isPalindrome(string){
    let reversedString = '';
    for(let i = string.length -1; i >= 0; i--){
        let letter = string[i];
        reversedString += letter;
    }
    console.log("reversedString == >", reversedString);
    if(string === reversedString){
        console.log("This is a palindrome string");
        return true;
    } else{
        console.log("This is not a palindrome string");
        return false;
    }
}
let chackPalindrome = isPalindrome("Shakib");
console.log(chackPalindrome);