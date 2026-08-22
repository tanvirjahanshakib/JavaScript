//filter number greater than value
function getFilteredArray(array, value){
    let filteredArray = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] > value){
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;   
}
let filteredArray = getFilteredArray([ 205, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50);
console.log("filteredArray ======>> >> >", filteredArray);