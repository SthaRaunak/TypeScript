//Type Aliases Custom Types.

//A way to create cutstom names for exisiting types.
//providing a convenient and descriptive wayt to refer to existing types.

//Type Aliases allows us to avoid repetition and mange types centrally.

function greet(user: { name: string; age: number }) {
  console.log(`Hi, I am ${user.name}`);
}

function isAdult(user: { name: string; age: number }) {
  return user.age > 18;
}

//In the above code we can avoid the type defining repetition and manage types centrally like this using Type Aliases

//Here User is our custom types made of existing types we can also a complex type using it.

// Here we improve the above code making it the type alias reusable.
type User = { name: string; age: number };

function ImprovedGreet(user: User) {
  console.log(`Hi, I am ${user.name}`);
}

function ImprovedIsAdult(user: User) {
  return user.age > 18;
}

//Practice: Creating a custom types aliases for a social media platform which includes a user and a post.

type User2 = {
  id: number;
  username: string;
};

type Post = {
  id: number;
  author: User2;
  imageUrl: string;
  content: string;
  timestamp: number;
  likes: number;
};

/*
    User2: represents a user on platform  with an id and username.
    TextPost:  is a type alias for a post containing text contet.
    ImagePost: represents a post with image, including its URL and description.
    VideoPost: Post containing a video with a URL,title, duration.
*/

//now using these type aliases

const currentUser: User2 = {
  id: 11,
  username: "Raunak Shrestha",
};

const myTextPost: Post = {
  id: 1010,
  author: currentUser,
  imageUrl: "https://randomwebsite/image.jpeg",
  content: "This is my first text post.",
  timestamp: Date.now(),
  likes: 10,
};

// Here type aliases provide a clear and structured way to define and create posts, making the code more readable and maintainable when dealing with various content types on the social media platform.
