// Union Types in typescript

// we use union when we are accpetinng value of two different data types

function combine(input1: number | string, input2: number | string) {
  let result;
  //Union definately make our function flexible by accepting more data types input but they might require a runtime type check while writing logic in the program
  //some runtime type checks
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Berlin", "Tokyo");
console.log(combinedNames);
