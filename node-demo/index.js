// run this project on CMD as -
// npm start 

// to install dependencies - 
// npm install

// 1. Write the code in this file  
// 2. run the app on CMD as -  
// npm start 
// 3. View the output on  http://localhost:9876/ on browser 
// 4. To stop the app on CMD - 
// Ctrl + C 
// Y 

console.log("Node demo project");

// create an ExpressJS server with this node project 

const express = require('express');
const app = express();
const portNumber = 9876;

app.listen(portNumber, () => {
    console.log(`App is running. \nGo to http://localhost:${portNumber}/ to view output.`);
});

app.get('/', (request, response) => {
    console.log('Welcome');
    response.send('Welcome to CG node demo app!');


});



// 