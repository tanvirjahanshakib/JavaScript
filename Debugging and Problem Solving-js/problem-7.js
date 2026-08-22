function getOddNumbers(numbers) {
  let odds = [];
 
  for (let i = 0; i < numbers.length; i++) { 
    if (numbers[i] % 2 === 1) {          
      odds.push(numbers[i]);
    }
  }
 
  return odds;
}
 
console.log(getOddNumbers([1, 2, 3, 4, 5, 6]));
