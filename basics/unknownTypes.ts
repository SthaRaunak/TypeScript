//Unknown types in TS
//basically a type-safe counterpart of 'any' type.
//unknown is a safer alternative to any because it requires type checking and forces you to handle potential type mismatches.
//It provides more confidence in type safety during development, especially when dealing with external data or uncertain types.

let userInput: unknown; //some variable that is not guranteed what type it will hold
let userName: string;
let userName2: string;
userInput = 5;
userInput = "Example String";

userName1 = userInput; // This will show an error as were trying to store a variable that can be anything into strictly defined type variable which is defined to store striong but if the variable is set to any instead of unknown it will basically skip all typechekcing and show no error

if (typeof userInput === "string") {
  userName2 = userInput;  //typescript knows we typechecked this so no error now as before So, we need a extra type check to give a variable with fixed type the variable with unknown
}

// unknown is better thany any as it doesnt not skip all typechecking.



 
