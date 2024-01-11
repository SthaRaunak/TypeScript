class Department {
  // public name: string; //just like private theres public but its the default accesssible from outside
  private employees: string[] = []; // private restricts this prpoerties access to only within the class
  //public and private are access modifiers
  constructor(private readonly id: string, public name: string) { //Short Hand Inheritance and read only properties
    // this.name = name;
    // this.id = id;
  }
  //methods:
  //here in this method we add a this parameter with the type of the class so this normally points at the instance of object with Department type
  //here it adds a extra layer of type safety for the this keyword so we can prevent error like with marketing Copy showing undefined output
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    //validation etc
    // this.id ="2; // will thrown an error as we have used read only access modifiers
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const marketing = new Department("m1","Marketing");

marketing.addEmployee("Raunak");
marketing.addEmployee("Lexical");
// marketing.employees[2] = 'Anna';
// we can add like this to rn but this way we do not call the add Employee function which might have some validation so to remove accessibilty from outside of the class we use private keyword
//once we used private key word this shows compilation error

console.log(marketing);
marketing.describe();
marketing.printEmployeeInformation();

marketing.name = "NEW NAME"; //this is possible because name is public

// const marketingCopy = { name: "asdasd", describe: marketing.describe };
//"this" typically refers to the which is responsible for calling the method

// marketingCopy.describe();
// will ouput undefined as marketingCopy has no such name property
//we get error here because its not type of Deparment as it doesnt have name property
// so once we add name prpoerty to the marketing Copy the error is gone
