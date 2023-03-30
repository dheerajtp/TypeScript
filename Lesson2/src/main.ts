let myName: string = "Dheeraj";

let myLastName: string;

myLastName = "TP";

let isLoading: boolean = false;
let age: number = 26;

let album: any;

let unionValue:string | number;

unionValue = "Union";

console.log(`${myName} ${myLastName}`);
console.log(`is Loading value ${isLoading}`);
console.log(`i'm ${age} year's old`);

const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(1,2))

let regularExpression:RegExp = /\w+/g
