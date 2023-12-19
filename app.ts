//working with core types using Type Script.

function add(num1: number, num2: number) {
  //Javascript approach:
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Incorrect input types!");
  }
  //this fails at runtime instead this can easily be fixed in development with typescript
  //but with typescript approach of defining data type we get error in development which is better experience for developers.
  //as typescript is statically typed this allows us to define the types of variables and parameter and so on.. and so they dont change on runtime
  //typescript only supports at development and not at runtime as all TS is converted into plain JS for brower to support
  return num1 + num2;
}

const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2);

console.log(result);
