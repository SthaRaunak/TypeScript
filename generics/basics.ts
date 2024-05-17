//Generics are a TS feature that allows us to pass in various types of data and create reusable code to handle different inputs.

// allows to define placeholders types which are replaced when code is executed with the actual types passed in.

//a template that can be reused across the same piece of code multiple times but with the value being independent of each invocation of the function.

function getLastElement<T>(arr: Array<T>): T {
  return arr[arr.length-1];
}

const numArray: Array<number> = [1,2,3,4]
const stringArray: Array<string> = ["apple","banana","orange"];

//Note the generics values

const lastNumber = getLastElement<number>(numArray) //here were declaring the gneric type but typescript is smart enough to infer this
 
const lastString  = getLastElement(stringArray); // auto infer

//Benfits : Type Safety and Error Detection , Code Reusability & Flexibility, Better Maintainabili ty 

