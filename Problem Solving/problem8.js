//Count word in a sentence
function countwords(sentence){
    let stringSplitArray = sentence.split(" ");
    return stringSplitArray.length;
}
let wordCount = countwords("I love programming");
console.log("wordCount ======>> >> >", wordCount);