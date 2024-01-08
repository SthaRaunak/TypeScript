//Function Types
//types that describe a function regarding the parameter and the return value of the function

function multiply(num1: number, num2: number) {
  return num1 * num2;
}
function testFunc(num: number): void {
  console.log(`Hey ${num}`);
}
let combineValues: (n1: number, n2: number) => number; //by default typescript infers to any which is not that useful so rn we define the type of the function so any funciton not matching the type defination will show error

combineValues = multiply;

combineValues = testFunc; //error as function type defination does not match

// combineValues = 5; Typescript canonot catch this error when on any tpye i change the value of combineValues to number but later we tried execute combined values as a function but we can fix this by giving it a type of Function

console.log(combineValues(2, 4));

//Callback function Types:
//types that descirbe a callback function passed into a function.


function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  cb(result); //Typescript is really strict in the case of parameters unlike its return type.
}

addAndHandle(4, 5, (result) => {
  console.log(`Result : ${result}`);
  return result; //but we still can return feven the callback has been explicitly defined to be a void. This is done in purpose as it just signifies that we will ignore any return vaules coming from this callback function in our main function.
});
