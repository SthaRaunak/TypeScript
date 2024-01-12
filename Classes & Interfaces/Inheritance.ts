//Inheritance

class Department2 {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department2) {
    console.log(`Department (${this.id}), ${this.name}`);
  }

  addEmployee(employee: string) {
    //validation
    this.employees.push(employee);
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

}

const infoTech = new ITDepartment("c1", ["Raunak Shrestha"]);
infoTech.addEmployee('meow');
console.log(infoTech);

//here both info tech and accounting are class inherited from the parent class department2
const accounting = new AccountingDepartment("a1",[]);
console.log(accounting)
accounting.addReport('Something went wrong')

accounting.getReports();