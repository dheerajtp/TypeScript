let stringArray: string[] = ["one", "two", "three"];

let stringIntArray: (string | number)[] = ["string1", 1997, "string2"];

let mixedArray: (string | number | boolean)[] = ["string1", 1997, true];

console.log(stringArray);

console.log(stringIntArray);

stringIntArray[0] = 1994;

console.log(stringIntArray);

type Guitarist = {
  name: string;
  active: boolean;
  album: (string | number)[];
};

let evh: Guitarist = {
  name: "Name",
  active: false,
  album: [1984, 5150],
};

console.log(evh);

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}`;
};

const greetings = greetGuitarist(evh);

console.log(greetings);

enum Grades {
  A=1,
  B,
  C,
  D,
  U,
}

console.log(Grades.D);
