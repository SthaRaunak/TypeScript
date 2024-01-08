//Enums in Javascript
//Enums : Enums (short for enumerations) are a way to define a set of named constants. they are exclusive to TS and some other programming languages.

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // this is concept of tuple fixed with defined types
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Enums in TypeScript offer a way to work with a set of named constants in a type-safe manner, making the code more readable and maintainable.
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Raunak",
  age: 17,
  hobbies: ["Guitar", "Programming"],
  role: Role.ADMIN, // tuple
};

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
