//Never Type
//indicates absenece of value
//never is kind of new

//void is a type used for functions that do not return a value or explicitly return undefined.
//never is a type used for functions that never produce a value (infinite loops, throwing errors) or represent values that should never occur.

//void: indicates lack of return value
//never: siginifies unreachable or never-ending

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }; // throw function never produces a value it crashes the part of the script and never return anything

  //Function throws an Error, which prevents any subsequent code execution

  //by default this function infers to void return type  but as a code quality perspective never is better .
}

//so never and void are

const result = generateError("Page not Found", 404);

console.log(result); //nothing as the script just crashses so its not even undefined as with void return

//Use void when you want to explicitly denote that a function does not return a value or returns undefined.
//Use never when you want to represent scenarios where a function doesn't have a reachable endpoint (infinite loops, throwing errors), or to narrow down types in exhaustive type checking.

//another useacase is infinit loops where a functino never really returns anything as it is in a infinite state of loop
