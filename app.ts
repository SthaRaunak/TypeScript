//Tuples type in typescript
//Tuples : Java Script doesn't have tuple type. (Added by TypeScript : Fixed - length array)
//A tuple is a typed array with a pre-defined length and types for each index.
//For creating tuple we have to explicitly define the types of value in the array with fixed length
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // this is concept of tuple fixed with defined types
} = {
  name: "Raunak",
  age: 17,
  hobbies: ["Guitar", "Programming"],
  role: [2, "author"], // tuple
};

person.role.push("admin"); //exception  typescript allows push in an tuple were weve explicity defined only two types

person.role = [0 , 'admin' , 'user'] // but this here will give error because were defining anopther string in the tuple with predefined [number , string] tuple unlike the push exception this will give error

person.role[1] = 10; //this will give an error as were expecting the type of string on index 1

//So we use tuple when we have the need to have exaclty x amount of values in array and know their types in advanced to maake the program strict to prevent errors