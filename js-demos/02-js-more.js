
// reference datatypes in JS 
// array [], JS object {}, object of class (construtor() )

let myArray = [10, 20, 10.5, 'abc', false];

console.log(myArray);
console.log(myArray[2]);

console.log("iterate through array using for loop:")
// for (let i = 0; i <= myArray.length; i++) {
//     console.log(myArray[i]);
// }

for (let i = 0; i <= myArray.length; i++)
    console.log(myArray[i]);

console.log("iterate through array using for of loop:")
for (const abc of myArray)
    console.log(abc);

// JS object is JS 
// similar to json object 

const empData = {
    eid: 101,
    firstName: "Sonu",
    salary: 50000.75,
    isMarried: false,
    phones: [9876543210, 7894561230],
    address: {
        street: "Bank street, Koti",
        city: "Hyderabaad",
        pin: 500001
    }
};
console.log("print empData object");
console.log(empData);

for (const prop in empData)
    console.log(prop);