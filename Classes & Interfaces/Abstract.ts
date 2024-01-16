//abstract  can be really helpful if we want to enforce all the classes based on some other class share some common methods but have different implementation (implementation done by the inherited class).
//abstract methods: method without body 
//Abstract classes provide a way to define a common interface or set of functionalities that should be shared among multiple subclasses.
//Note: abstract class cannot be in instantiated themselves . So we cant do (new Shape) | Its just there to be inherited from so that the inherited class can be instantiated and the inherited class are forced to provide concrete implementation to abstract methods or TS shows error.


abstract class Shape {
  //abstract method has to be implemented by every sub class that is based on this base class.
  abstract calculateArea(): number;

  displayArea(): void {
    const area = this.calculateArea();
    console.log(`Area: ${area}`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    //calling the constructor of the base class with no parameter
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

//Using the methods :

const circle = new Circle(10);
circle.displayArea();

const rectangle = new Rectangle(20, 40);
rectangle.displayArea();
