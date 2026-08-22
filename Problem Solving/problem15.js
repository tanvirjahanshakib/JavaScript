const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
function getSumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
let evenNumbers = getEvenNumbers(arr);
let sumOfEvenNumbers = getSumOfEvenNumbers(evenNumbers);
console.log("Even Numbers = = >> " + evenNumbers);
console.log("Sum of Even Numbers = = >> " + sumOfEvenNumbers);