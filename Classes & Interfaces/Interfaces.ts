//Interface describes the structure of an object

interface Person {
       name: string ; 
       age: number;
       greet(phrase: string) : void;
}

let user1: Person;

user1 = {
    name: 'Raunak',
    age: 22,
    greet(phrase) {
        console.log(phrase + ' ' + this.name)
    }
}; //user1 is a valid defination of the object as it satisfies the structure of our interface


user1.greet('This is')

//Note: In practice, interfaces are commonly used for defining object shapes and contracts, while types are used for creating aliases or composing complex types.

// In Typescript , interfaces can be used in conjunction with classes to define a contract for the structure of a class. when a class implements an interface, it is required to adhere to the strucutre specified by that interface. This helps ensure that the class provides the expected properties and methods.

interface Greetable{
    name: string;
    greet(phrase: string): void;
}
// interfaces are often used to share funcitonality amongst different classes not regarding their implementation as interface only has the property/method and type 
// bit like abstract classes


let user2 : Greetable = {
    name : "Raunak",
    greet(phrase: string): void;
}

class Person1 implements Greetable { //use interface in class like this we can implement different intrefaces like implements interface1, interface2
    age = 30;

    constructor(public name:string){}

    greet(phrase: string){
        console.log(phrase + " " + this.name)
    }
}
class Person3 {
    
}
let newUser: Greetable; // also one of the advantage is that we dont even need to know about the class once we see that theres a greetable interface we know its structure must include greet method as it forces it
newUser = new Person1('Raunak');
newUser.greet("Hi I am");
console.log(newUser);



//Another Example:

interface Employee {
    id: number;
    name: string;
    role: string;
    getSalary(): number;
}


//Implement the interface in a class

class FullTimeEmployee implements Employee{
    id: number;
    name: string;
    role: string;
    salary: number; // addtional property not in the interface 

    constructor(id: number, name: string, role:string , salary: number){
        this.id = id;
        this.name = name;
        this.role = role;
        this.salary =salary;
    }

    getSalary(): number{
        return this.salary;
    }

}

// Implement the interface in another class
class PartTimeEmployee implements Employee{
    id: number;
    name: string;
    role: string; 
    //addtional properties
    hourlyRate: number;
    hoursWorked : number;

    constructor(id:number,name:string, role:string, hourlyRate: number, hoursWorked: number){
        this.id = id;
        this.name = name;
        this.role = role;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    getSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}


//Usage

const fullTimeEmployee = new FullTimeEmployee(101,"Raunak Shrestha","Software Engineer",60000);
console.log('Full-Time Employee Salary:', fullTimeEmployee.getSalary());

const partTImeEmployee = new PartTimeEmployee(202,"John Doe","Designer",20,15);
console.log("Part-Time Employee Salary",partTImeEmployee.getSalary())

//Conclusion : By using interfaces, we ensure that both FullTimeEmployee and PartTimeEmployee provide the necessary properties and methods expected for an Employee, making the code more predictable and maintainable.




//Interface with read only prpoerty
interface AppConfig{
    readonly apiUrl: string;
    readonly maxRequests: number;
}

class AppConfiguration implements AppConfig{
    apiUrl: string; // we dont have to add readonly here as after we implement the inserface it TS assumes its a readonly property 
    maxRequests: number;

    constructor(apiUrl:string , maxRequests: number){
        this.apiUrl = apiUrl;
        this.maxRequests = maxRequests;
    }

    // Attempting to modify the properties in a method will result in a compilation error
    // updateConfig(newUrl: string, newMaxRequests: number): void {
    //     this.apiUrl = newUrl; // Error: Cannot assign to 'apiUrl' because it is a read-only property.
    //     this.maxRequests = newMaxRequests; // Error: Cannot assign to 'maxRequests' because it is a read-only property.
    // }
}

//Usage 

const config = new AppConfiguration("htttps://api.example.com",5);
console.log(config);


//Attempting to modify the prperties wil resulrt in a compilation error.

// config.apiURl = "asdasdasd.com" // Error: Cannot assign to 'apiUrl' because it is a read-only property.
// config.maxRequests = 20; // Error: Cannot assign to 'maxRequests' because it is a read-only property.

//Inheritance in Interface i.e using extend

//Base interface
interface Vehicle {
    start(): void;
    stop(): void;
}

//derived interface extending the base interface

interface Car extends Vehicle {
    drive(): void;
}

class Sedan implements Car {
    //now we have to implement methods from both vehicle and car interfaces or we get erro
    start(): void {
        console.log("Sedan starting....");
    }
    stop(): void {
        console.log("Sedan stopping .... ");
    }

    drive(): void {
        console.log("Sedan is on the move");
    }

    //additional methods  specific to sedan class
    park() {
        console.log("Sedan parked.");
    }
}

//instance
const mySedan = new Sedan();

// Call methods from both Vehicle and Car interfaces
mySedan.start();  // Output: Sedan starting...
mySedan.drive();  // Output: Sedan is on the move
mySedan.stop();   // Output: Sedan stopping...

// Call the additional method specific to the Sedan class
mySedan.park();   // Output: Sedan parked.

//Interfaces can also be used define function types

//refresher: type aliases fuction type
// type addFn = (a:number,b:number) => number;

interface addFn{
    (a:number, b:number) : number;
}

// we can do this but custom types is more common and shorter this is just to be aware that this way of defining a function type exists

let add: addFn;
add = (n1: number, n2: number): number =>{
    return n1+n2;
}

