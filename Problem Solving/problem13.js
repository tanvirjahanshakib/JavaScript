// loop through an object propertyes
function getResult(result){
    for(let key in result){
        console.log(key + " : " + result[key]);
    }
    return result;
}
let result = {
    Bangla: "A+",
    English: "A",
    Math: "A+",
    CSE: "A+",
}
console.log("result ======>> >> >", getResult(result));



// using keys() method
function getResultKeys(result){
    let keys = Object.keys(result);
    for(let i = 0; i < keys.length; i++){
        console.log(keys[i] + " : " + result[keys[i]]);
    }
    return result;
}
console.log("result ======>> >> >", getResultKeys(result));