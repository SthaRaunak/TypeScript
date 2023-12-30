//Function Types
//types that describe a function regarding the parameter and the return value of the function

function multiply(num1: number, num2: number) {
  return num1 * num2;
}
function testFunc(num: number): void{
    console.log(`Hey ${num}`)
}
let combineValues: (n1: number, n2: number) => number; //by default typescript infers to any which is not that useful so rn we define the type of the function so any funciton not matching the type defination will show error

combineValues = multiply;

combineValues = testFunc; //error as function type defination does not match


// combineValues = 5; Typescript canonot catch this error when on any tpye i change the value of combineValues to number but later we tried execute combined values as a function but we can fix this by giving it a type of Function

console.log(combineValues(2, 4));
