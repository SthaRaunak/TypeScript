//Generic function with multiple generics

function mergeArrays<T, K>(arr1: T[], arr2: K[]) {
  return [...arr1, ...arr2];
}

const numArr = [1, 2, 3];
const stringArr = ["hello", "world"];

// explicity define the generics like this.
const mergedArray = mergeArrays<number, string>(numArr, stringArr);

// Or, let TS infer the types like this but will work.
const mergedArray2 = mergeArrays(numArr, stringArr);

console.log(mergedArray);
