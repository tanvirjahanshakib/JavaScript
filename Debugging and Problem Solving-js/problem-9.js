function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}
 
console.log(celsiusToFahrenheit(0));


function sumArray(numbers) {
  let total = 0;
 
  for (let i = 0; i < numbers.length; i++) { 
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4]));




function repeatString(str, times) {
  let result = "";
 
  for (let i = 0; i < times; i++) {
    result += str;
  }
 
  return result;
}
 
console.log(repeatString("ab", 3)); 



function updateAge(person, newAge) {
  person.age = newAge;
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));

