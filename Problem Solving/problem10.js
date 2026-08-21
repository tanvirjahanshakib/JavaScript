//Sum of array and average
function sumOfArrayAndAverage(array){
let sum = 0;
for (let number of array){
    sum += number;
}
let average = sum / array.length;
return average;
}
console.log(sumOfArrayAndAverage([ 205, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));