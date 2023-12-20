//explicitly defining types for object
//we can explicitly define it but its better for typescript to infer this instead

const person: {
  name: string;
  age: number;
} = {
  name: "Raunak",
  age: 17,
};
//wrong way of defining type of object is
// const person: object = { key: value}
//This makes it so that the compiler has no knowledge about the object its self like its key's and its value types but just will know that this is an object

//Even better way is let typescript infer it
// const person = { key : value}

console.log(person.name);
