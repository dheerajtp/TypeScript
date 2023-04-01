"use strict";
let stringArray = ["one", "two", "three"];
let stringIntArray = ["string1", 1997, "string2"];
let mixedArray = ["string1", 1997, true];
console.log(stringArray);
console.log(stringIntArray);
stringIntArray[0] = 1994;
console.log(stringIntArray);
let evh = {
    name: "Name",
    active: false,
    album: [1984, 5150],
};
console.log(evh);
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
const greetings = greetGuitarist(evh);
console.log(greetings);
var Grades;
(function (Grades) {
    Grades[Grades["A"] = 1] = "A";
    Grades[Grades["B"] = 2] = "B";
    Grades[Grades["C"] = 3] = "C";
    Grades[Grades["D"] = 4] = "D";
    Grades[Grades["U"] = 5] = "U";
})(Grades || (Grades = {}));
console.log(Grades.D);
