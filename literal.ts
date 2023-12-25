//literal types
//Literal types in TypeScript allows us to specify vairable or type that must be a specific value.
//useful when we want to limit a varirable to only a few possible fixed values

const test = 2.5; // Here typescript infers the variable type to its value as its a const and typescript knows its value nor its type is going to change

function printDirection(direction: "left" | "right" | "up" | "down") {
  console.log(`Moving ${direction}`);
}

printDirection("left"); // valid argument
printDirection("up"); //valid argument

printDirection("north"); //Error: Argument of type "north" is not assignable to parameter of type 'left' | 'right' | 'up' | 'down'

// working with same combine function as in union to show usecase of literal types

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // literal types : specific value (here not any string but the two string )
  //often used in conjunction  with union type i.e(two or more possbile values).
) {
  //Operation based on resultConversion value.
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number" // here now if i set the comparision with as-numb for eg it will throw an error as it knows resultConversion can only have two possible values i.e as-number  | as-text
  ) {
    result = +input1 + +input2;
  } else if (resultConversion === "as-text") {
    result = input1.toString() + input2.toString(); //adding toString as typescript complains + cannnot be applied to string
  }

  return result;

  //Below code is just to return the result either as a number or string base on resultConversion value.
  // if (resultConversion === "as-number") {
  //   return parseInt(result);
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
//Here also if we mistake the argument as anyother string than as-number or as-text it will throw an error. This is an extra layer of type safety.
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
