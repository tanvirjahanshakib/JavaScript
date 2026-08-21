function largestNumberInArray(numbers){
    let largestNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number > largestNumber){
            largestNumber = number;
        }
    }
    return largestNumber;
}



let numbers = [ 102, 203, 304, 405, 506, 607, 708, 809, 910, 11111 ];
console.log(numbers);
let largest = largestNumberInArray(numbers);
console.log("Largest number:", largest);


function smallestNumberInArray(numbers){
    let smallestNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i]; 
        if(number < smallestNumber){
            smallestNumber = number;
        }
    }
    return smallestNumber;
}

let smallest = smallestNumberInArray(numbers);
console.log("Smallest number:", smallest);