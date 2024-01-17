//Interface describes the structure of an object

interface Person {
       name: string ;
       age: number;
       greet(phrase: string) : void;
}

let user1: Person;

user1 = {
    name: 'Raunak',
    age: 22,
    greet(phrase) {
        console.log(phrase + ' ' + this.name)
    }
}; //user1 is a valid defination of the object as it satisfies the structure of our interface


user1.greet('This is')

//Note: In practice, interfaces are commonly used for defining object shapes and contracts, while types are used for creating aliases or composing complex types.