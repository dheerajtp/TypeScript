// Type aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

interface Guitarist {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
}

type UserID = stringOrNumber;

//LIteral Types

let userName: "dheerajtp" | "dheerajtp3" | "darylDixon";

userName = "darylDixon";

// Functions

// Adding a type to a function which have a return value
const add = (a: number, b: number): number => {
  return a + b;
};

// Function without return value, so type void is used if the function doesn't return anything
const logMessage = (message: any): void => {
  console.log(message);
};

logMessage("Hello");
logMessage("There");
logMessage(add(5, 6));

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (a, b) => {
  return a * b;
};

console.log(multiply(5, 2));

// Function signature using interface

interface concationation {
  (a: string, b: any): string;
}

let stringConcat: concationation = (a, b) => {
  return a + b;
};

console.log(stringConcat("Hi", 3));

//Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
  return typeof c !== "undefined" ? a + b + c : a + b;
};

console.log(addAll(1, 2, 3));
console.log(addAll(1, 2));

// Default Parameters

const sumAll = (a: number, b: number, c: number = 5): number => {
  return a + b + c;
};

// Rest Parameters

const total = (...numbers: number[]): number => {
  return numbers.reduce((prev, current) => prev + current, 0);
};

logMessage(total());

//Type checking with a function || custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
