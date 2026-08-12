// Task 1: Print "Hello" Five times
// for (let i = 1; i <= 5 ; i++ ) {
//     console.log("Hello");
// }
// let i = 1;
// while( i <= 5){
//     console.log("Hello");
//     i++;
// }
// Task 2: Write a for loop that prints numbers from 1 to 10
// for (let i = 1 ; i <= 10 ; i++){
//     console.log(i);
// }
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// Task 3: Write a while loop that prints number from 10 to 1
// let i = 10;
// while( i>= 1){
//     console.log(i);
//     i--;
// }
// Task 4 using a while loop, print Loop is Running exactly 7 times
// let i = 0;
// while( i < 7 ){
//     console.log("Loop is Running");
//     i++;
// }
// Task 5: Write a for loop thatt prints even number from 1 to 30
// for(let i = 0 ; i <= 30 ; i++){
//     if( i % 2 === 0){
//         console.log(i);
//     }   
// }
// Write a for loop that prints the sum of numbers from 1 to 20
// let sum = 0;
// for( let i = 1 ; i <= 20 ; i++){
//     sum += i;
//     console.log ( i, sum);
// }
// Task 7: Ask the user for a number, then print its multiplication table from 1 to 10 using a for loop
// const number = 7
// for(let i = 1 ; i <= 10 ; i++){
//     console.log(number , "X" , i, "=" , number * i);
// }
// const number = 7;
// let i = 1;
// while (i <= 10) {
//     console.log(number, "X", i, "=", number * i);
//     i++;
// }
// Task 8: Write a for loop that prints numbers from 20 to 1
// for(let count = 20; count >= 1 ; count--){
//     console.log(count);
// }
// Task 9: Write a for loop that calculates the sum of all even numbers for 2 to 50
// let sum = 0;
//  for(let i = 2 ; i <= 50 ; i+=2){
//     sum += i;
//     console.log(i , sum);
// }
// Task 10: Write a for loop 1 to 50 that stops completely as soom as it reachees a number greater that 30.
// for (let i = 0; i <= 50; i++) {
//     if (i > 30){
//         break;
//     }
//     console.log("The Number of Count is", i);
// }
// Write a for loop from 1 to 20 that skips any number divisible by 4
for ( let i = 1 ;  i <= 20 ; i++){
    if ( i % 4 === 0){
        continue;
    }
    console.log("The Value of i is", i ); 
}