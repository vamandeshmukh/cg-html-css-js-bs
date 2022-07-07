

// ---------------
// callbacks in JS 
// ---------------

// console.log("one");

// // setTimeout(arg1, arg2);
// // setTimeout(() => {}, ms);
// // setTimeout(() => {}, 2000);

// setTimeout(() => {
//     console.log("two");
// }, 2000);

// ---------------
// callbacks in JS 
// ---------------

// console.log("one");

// let num = 10;

// setTimeout(() => {
//     num = 20;
// }, 2000);

// console.log(num);

// ----------------------------
// problems of asynchronous JS 
// ----------------------------

console.log('begin...'); // 1

const getFun = () => {
    setTimeout(() => {
        return { messsage: 'Have fun!' }; // 2
    }, 2000);
}

const fun = getFun(); // 3
console.log(fun);  // 4

// -------------------------------------------------------------
// // 1. solution with callback 
// // callback - pass a function as argument to another function  
// -------------------------------------------------------------

// console.log('begin...'); // 1

// const getFun = (callBack) => {
//     setTimeout(() => {
//         callBack({ messsage: 'Have fun!' }); // 2
//     }, 2000);
// }

// getFun(() => {});

// getFun((fun) => {
//     console.log(fun.messsage);  // 4
// }); // 3

// ----------------------------------------------
// // 1. same solution with callback - separately
// ----------------------------------------------

// console.log('begin...'); // 1

// const getFun = (callBack) => {
//     setTimeout(() => {
//         callBack({ messsage: 'Have fun!' }); // 2
//     }, 2000);
// }

// const callbackFun = (fun) => {
//     console.log(fun.messsage);
// }

// getFun(callbackFun); // 3







