//Type Assignment and Type Inference

//Type Inference: the ability of compiler to autmatically determine or infer data types of variable or expression based on value assigned to them.
function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
let number1: number;
number1 = 5; //Type inference saves us time because we dont have to always explicitly define types like this
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
resultPhrase = 0; // this yells at us that number is not assignble to type 'string' as a result of type inference  it automattically determine result Phrase was a string
add(number1, number2, printResult, resultPhrase);
