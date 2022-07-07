
// functions in JS == methods in Java 

// () -> {}

// const fun = () => {
//     console.log(`fun function`);
// };

// fun();

// // function with return value, without arguments 
// const fun2 = () => {
//     return 10;
// }

// const num2 = fun2();
// console.log(num2);

// // function with return value, with arguments 
// const fun3 = (i, j) => {
//     return i + j;
// }

// const num3 = fun3(10, 20);
// console.log(num3);

// // function without return value, with arguments 
// const fun4 = (i, j) => {
//     console.log(i + j);
// }
// fun4(10, 15);

// // function without return value, without arguments 
// const fun5 = () => {
//     console.log("fun5 function");
// }
// fun5();


const fun6 = (i, j) => {
    console.log(i + j);
}

fun6(); // NaN = undefined + undefined
fun6(10); // NaN = number + undefined
fun6(10, 20); // 30 number = number + number  
fun6(10, 20, 30); // 30 number = number + number, third arg is ignored 


// callback in JS 


