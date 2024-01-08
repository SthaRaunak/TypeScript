let appId  = 'abc';
const button = document.querySelector("button")!;

function add(n1: number , n2: number) {
  if(n1 + n2 > 0){
    return n1 + n2;
  }
  return; // will  throw and error if we coditinoally return so we have to explicilty return nothing when noimplicit return is set to true
}

function clickHandler(message: string) {
    // let houseNumber = 2323; //noUnusedlocals additon type check set to true
    console.log('clicked!' + message)
}
if (button) {
  button.addEventListener("click", clickHandler.bind(null,"You're wholeheartedly welcome!"))
    
}

function test(num :number){ // will also throw an error when the parameter is not used as noUnsedparams addtion type check set to true
    console.log("hello"); 
    return num;
}


test(23);

const map = new Map();

console.log(map);

console.log("masonsasswe");
