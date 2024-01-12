//Inheritance

class Department2 {
  protected employees: string[] = []; // protected: unlike private protected makes the property available to its subclasses 

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department2) {
    console.log(`Department (${this.id}), ${this.name}`);
  }

  addEmployee(employee: string) {
    //validation
    this.employees.push(employee);
  }

  printEmployee(){
    console.log(this.employees.length);
    console.log(this.employees);
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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting Department");
  }
  //adding our own methods
  addReport(text: string) {
    this.reports.push(text);
  }
  
  getReports(){
    console.log(`Total reports : ${this.reports.length}`)
    console.log(this.reports)
  }

  //overriding the parent class method
  addEmployee(employee: string) {
    if(employee === 'Raunak'){
      return;
    }

    // employees.push(employee); //this wont work if the employees property in parent class is private 

    this.employees.push(employee);
  }

}

const infoTech = new ITDepartment("c1", ["Raunak Shrestha"]);
infoTech.addEmployee('meow');
console.log(infoTech);

//here both info tech and accounting are class inherited from the parent class department2
const accounting = new AccountingDepartment("a1",[]);
console.log(accounting)
accounting.addReport('Something went wrong')

accounting.addEmployee('Raunak');
accounting.addEmployee('John Doe')

accounting.getReports();
accounting.printEmployee();
//A thing to note about private properties , they are confined to class in which they are defined and even derived classes dont have direct access to them


/*
private members cannot be accessed outside the declaring class, while protected members can be accessed within the declaring class and its subclasses.
*/