//Function Return types

function add(n1: number, n2: number) {
  return n1 + n2; // here since both param are number the return type is infered to be number
  // if we explicitly set the return type to string it wiill show an error as the calculation results in number
}

function printResult(num: number): void {
  // typesscript infers the return type as void as this function doesnt really return anything
  console.log(`Result: ${num}`);
}

printResult(add(5, 12));

console.log(printResult(add(5, 12))); //returns undefined

// let someValue: undefined;

//undefined => any vairable that has not been assigned a value

//for a function return type to be undefined
//now this function doesnt show an error as there is a return statement but theres nothing in it so better use void 
function testFunc(): undefined {
  console.log("undefined function"); 
  return;
}

//Void vs Undefined in function
//Void: denotes function doesnt return any value.
//Undefined: denotes absence of value.

