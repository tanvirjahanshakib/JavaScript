// Factorial of a number
function factorialOfNumber(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial *= i;
        console.log("i ==>>", i);
    }
    return factorial;
}
console.log(factorialOfNumber(5));