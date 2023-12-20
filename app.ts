//Arrays in typescript

// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Raunak",
  age: 17,
  hobbies: ["Guitar", "Programming"],
};

let favouriteActivites: string[];

favouriteActivites = "Sports"; //gives an error as were expecting array of string instead
favouriteActivites = ["Sports", 1]; // again an error number wasnt being expected could be avoided with any type
favouriteActivites = ["Sports"]; // no error
console.log(person.name); 

for (const hobby of person.hobbies) {
  //here hobby is automatically infered as string by typesciprt and lets us do all the string methods on it as it knows person.hobbies is a array of strings
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) !!Error: map doesnt exist on type string
}

