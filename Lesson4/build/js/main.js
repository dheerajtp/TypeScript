"use strict";
// Type aliases
//LIteral Types
let userName;
userName = "darylDixon";
// Functions
// Adding a type to a function which have a return value
const add = (a, b) => {
    return a + b;
};
// Function without return value, so type void is used if the function doesn't return anything
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hello");
logMessage("There");
logMessage(add(5, 6));
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 2));
let stringConcat = (a, b) => {
    return a + b;
};
console.log(stringConcat("Hi", 3));
//Optional Parameters
const addAll = (a, b, c) => {
    return typeof c !== "undefined" ? a + b + c : a + b;
};
console.log(addAll(1, 2, 3));
console.log(addAll(1, 2));
// Default Parameters
const sumAll = (a, b, c = 5) => {
    return a + b + c;
};
// Rest Parameters
const total = (...numbers) => {
    return numbers.reduce((prev, current) => prev + current, 0);
};
logMessage(total());
//Type checking with a function || custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
