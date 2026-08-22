// Problem 14: You are given an object containing information about a student.

// ---- Tasks ----
// Print all keys.
// Print all values.
// Print each key-value pair.
// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Count the total number of properties in the object.
// Check if the object contains a property named "email".

//---- Expected input:
//  const student = {
//   name: "Utsho",
//   age: 25,
//   university: "DIU",
//   department: "CSE",
// };

// -----------------------------

//---- Expected output:
// name age university department

// Utsho 26 DIU CSE

// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Total Properties: 4
// Has Email: false

const student = {
    name: "Utsho",
    age: 26,
    university: "DIU",
    department: "CSE",
};

function printStudentInfo(student) {
    let keyItem = "";
    for (let key in student) {
        keyItem += key + " ";
    }
    console.log(keyItem);
    let valueItem = "";
    for (let key in student) {
        valueItem += student[key] + " ";
    }
    console.log(valueItem);
    let keyAndValueItem = "";
    for (let key in student) {
        keyAndValueItem += key + ": " + student[key] + "\n";
    }
    console.log(keyAndValueItem);
    console.log("Total Properties: " + Object.keys(student).length);
    console.log("Has Email: " + ("email" in student));
}

printStudentInfo(student);