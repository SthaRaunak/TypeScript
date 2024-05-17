interface MetaData {
  sex: string;
  height: "tall" | "short";
  favouriteNumber: number;
}

//Defining interface using generic
interface Person<T> {
  id: number;
  name: string;
  age: number;
  metadata: T;
}

// metadata being typed as array of number or string
const personOne: Person<(number | string)[]> = {
  id: 1,
  name: "Jeff",
  age: 31,
  metadata: ["male", "tall", 22],
};

//metadata being types as interface MetaData
const personTwo: Person<MetaData> = {
  id: 1,
  name: "Andrew",
  age: 22,
  metadata: {
    sex: "male",
    height: "tall",
    favouriteNumber: 22,
  },
};
