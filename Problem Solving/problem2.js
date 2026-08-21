// Sum of a range of number (1 to n)
function sumOfrange(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
        console.log("i ==>>", i);
    }
    return sum;
}
console.log(sumOfrange(5));