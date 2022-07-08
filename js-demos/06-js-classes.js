
// classes in JS 

// define a class 
class Employee {

    // class members: fields, methods, constructor

    // fields 
    employeeId;
    firstName;
    salary;

    // constructor (only one!)
    // constructor() {

    // }

    constructor(employeeId, firstName, salary) {
        this.employeeId = employeeId;
        this.salary = salary;
        this.firstName = firstName;
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

const obj2 = new Employee(102, 'Monu', 60000);
obj2.printEmpData();

console.log(obj2);




