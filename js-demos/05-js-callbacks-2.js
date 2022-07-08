

// callbacks in JS 

// 1
// 2 // produces that data 
// 3 // needs some data 

// console.log("one");

// let someVariable = 10;
// console.log(someVariable); // 10 

// setTimeout(() => { someVariable = 20; }, 2000);

// console.log(someVariable); // 20 



// let someVariable = 10;

// console.log(someVariable); // 10 

// functionThatNeedsCallback = (callbackFunction) => {
//     setTimeout(() => {
//         callbackFunction(20);
//     }, 2000);
// }

// functionToBePassedAsCallback = (arg) => {
//     console.log(arg); // 20 
// }

// functionThatNeedsCallback(functionToBePassedAsCallback);


// ================================================

// const fun = (arg) => {

//     console.log( arg + 10);

// }

// fun(10);
// fun("abc");

// const fun = (arg) => {

//     arg();

// }


// // fun(      () => { }      );

// const fun2 = () => { }

// fun(fun2);


// const fun3 = (arg1, arg2) => {
//     // code 
// };

// fun3(a1, a2);

// arrow function and old JS function 

// // arrow function 
// const fun = () => {
//     console.log("arrow function");
// };

// fun();

// // old JS function 
// function fun2() {
//     console.log("Old JS function");
// };

// fun2();


// AC DC  

const fun3 = (abc) => {
    console.log(abc);
}

const fun4 = (def) => {
    console.log(def[0]);
}

fun3({ prop: "some value", prop2: "some other value" });
fun4([123, 456]);

const empData = { eid: 101, eName: 'Sonu', prop: 9876542310 };
const myFriends = ['Sonu', 'Monu', 'Tonu']

fun3(empData);
fun4(myFriends);







