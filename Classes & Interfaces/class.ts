class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  //methods:
  //here in this method we add a this parameter with the type of the class so this normally points at the instance of object with Department type
  //here it adds a extra layer of type safety for the this keyword so we can prevent error like with marketing Copy showing undefined output
  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }
}

const marketing = new Department("Marketing");

console.log(marketing);
marketing.describe();

const marketingCopy = { name: "asdasd", describe: marketing.describe };
//"this" typically refers to the which is responsible for calling the method

marketingCopy.describe(); // will ouput undefined as marketingCopy has no such name property
//we get error here because its not type of Deparment as it doesnt have name property
// so once we add name prpoerty to the marketing Copy the error is gone
