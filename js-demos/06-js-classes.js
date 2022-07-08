
// classes in JS 

// define a class 
class Employee {

    // class members: fields, methods, constructor

    // fields 
    employeeId;
    firstName;
    salary;

    // constructor 
    constructor() {

    }

    // methods 
    work = () => {
        // code 
    }

    printEmpData = () => {
        console.log(this.employeeId + " " + this.firstName + " " + this.salary);
    }

}

// create an object of the class 

// Java : Employee obj = new Employee();

const obj = new Employee();
obj.printEmpData();

obj.employeeId = 101;
obj.firstName = 'Sonu';
obj.salary = 50000;
obj.printEmpData();

console.log(obj);






