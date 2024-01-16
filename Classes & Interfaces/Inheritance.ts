//Inheritance

class Department2 {
  //when you add static properties or method on a class we cannot access  them from inside the non static parts.

  static fiscalYear = 2020;
  protected employees: string[] = []; // protected: unlike private protected makes the property available to its subclasses

  constructor(private readonly id: string, public name: string) {
    // console.log(this.fiscalYear) //we cant access this here because anything in class not marked with static will not be able to access static properties because this refers to instance created based on the class , and static property is not avialable on a instance.
    

    // console.log(Department2.fiscalYear); //this here works completely fine as were accesing it from the class directly
  }

  describe(this: Department2) {
    console.log(`Department (${this.id}), ${this.name}`);
  }

  addEmployee(employee: string) {
    //validation
    this.employees.push(employee);
  }

  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  

} 

class ITDepartment extends Department2 {
  //class Inheritedclass extends baseClass //extend is used to inherit from the base class
  public admins: string[]; //long way of doing it
  constructor(id: string, admins: string[]) {
    //super is used to call methods oraccess properties of the parent class in the context of dervied class.
    super(id, "Information Technology"); //call super the first thing before doing anything with the this keyword
    this.admins = admins;
  }
}

class AccountingDepartment extends Department2 {
  private lastReport: string;
  //a getter is a method that retrieves the value of a private class property

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }
  // a setter is a method that sets the value of a private class propertym oftern including validation or logic
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting Department");
    this.lastReport = reports[0];
  }
  //adding our own methods
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  getReports() {
    console.log(`Total reports : ${this.reports.length}`);
    console.log(this.reports);
  }

  //overriding the parent class method
  addEmployee(employee: string) {
    if (employee === "Raunak") {
      return;
    }

    // employees.push(employee); //this wont work if the employees property in parent class is private

    this.employees.push(employee);
  }
}

const infoTech = new ITDepartment("c1", ["Raunak Shrestha"]);
infoTech.addEmployee("meow");
console.log(infoTech);

//here both info tech and accounting are class inherited from the parent class department2
const accounting = new AccountingDepartment("a1", []);

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Raunak");
accounting.addEmployee("John Doe");

accounting.getReports();
accounting.printEmployee();
//A thing to note about private properties , they are confined to class in which they are defined and even derived classes dont have direct access to them

/*
private members cannot be accessed outside the declaring class, while protected members can be accessed within the declaring class and its subclasses.
*/


const employee1 = Department2.createEmployee('raunak');

console.log(employee1, Department2.fiscalYear);
