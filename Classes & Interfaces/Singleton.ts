//we can create a singleton pattern using a private constructor to ensure that only one instance of a class can be created.

class Singleton {
  private static instance: Singleton; //this is marked as static to be associated with the class itself rather than an instance.

  private constructor() {
    //private consturctor to prevent instatntiation from outisde the class.
  }

  public static getInstance(): Singleton {
    if (!this.instance) { //if theres no instance of the class already we create and return it else just return it
      // this.instance as the this keyword in static method alwaytsrefers to the base class constructor itself
      this.instance = new Singleton();
    }
    return this.instance;
  }

  exampleMethod(): void {
    console.log("Example method")
  }
}
// new Singleton() ; //This is now prohibited as the constructor of this class in private so no instance can be created like this
//Usage:
const singletonInstance1 = Singleton.getInstance();
singletonInstance1.exampleMethod();

//Trying to create a new instance will return the existing one;

const singletonInstance2 = Singleton.getInstance();


//Proving both are same instances

console.log(singletonInstance1 == singletonInstance2)

//Summary: a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance. The primary goals of the Singleton Pattern are to ensure that a class has only one instance and to provide a way to access that instance from any point in the application.