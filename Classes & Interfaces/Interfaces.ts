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