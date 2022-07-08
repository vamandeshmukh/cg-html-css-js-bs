

// callbacks in JS 

// 1
// 2 // produces that data 
// 3 // needs some data 

// console.log("one");

// let someVariable = 10;
// console.log(someVariable); // 10 

// setTimeout(() => { someVariable = 20; }, 2000);

// console.log(someVariable); // 20 



let someVariable = 10;

console.log(someVariable); // 10 

functionThatNeedsCallback = (callbackFunction) => {
    setTimeout(() => {
        callbackFunction(20);
    }, 2000);
}

functionToBePassedAsCallback = (arg) => {
    console.log(arg); // 20 
}

functionThatNeedsCallback(functionToBePassedAsCallback);









