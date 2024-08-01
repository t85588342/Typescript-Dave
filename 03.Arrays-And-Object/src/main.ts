let strArr = ["One", "TWo", "Three"];
let guitars = ["Strats", "Les Paul", 1984];
let mixedData = ["EVH", 1984, true];

strArr[0] = "Five";
console.log(strArr);

guitars[0] = 3545;
console.log(guitars);
guitars.unshift("Jim");
console.log(guitars);

// strArr = guitars // not allowed
guitars = strArr; // allowed
console.log(guitars);

let test = [];
let bands: string[] = [];
bands.push("Tushar");
console.log(bands);
// bands.push(true); // not allowed

// Tuple
let myTuple: [string, number, boolean] = ["Tushar", 28, true]; // has fixed length and elements needs to be in the order of datatype

let mixed = ["John", 1, false]; // not a tuple
mixed = myTuple; // allowed
// myTuple = mixed // not allowed

myTuple[1] = 25;
// myTuple[0] = 25 // not allowed

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);

// array is special type of object in JS
myObj = bands;
myObj = {};

const expObj = {
  prop1: "Tushar",
  prop2: true,
};
expObj.prop1 = "Tushar Dongre"; // allowed
// expObj.prop1 = 45; // NOT allowed

// TYPE
// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };
interface Guitarist {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
}
// for now assume type and interface works in the same way

let evh: Guitarist = {
  name: "Eddie",
  active: true,
  albums: [1984, 5120, "OU812"],
};

// let evh: Guitarist = {
//   name: "Eddie",
//   albums: [1984, 5120, "OU812"],
// }; // not allowed as property "active" is missing

let jp: Guitarist = {
  active: false,
  albums: ["I", "II", "III"],
};
evh = jp; // allowed
// evh.years = 40 // not allowed 'cause years property is not defined in type Guitarist

// we can make property of a type optional
let evhj: Guitarist = {
  name: "Eddie",
  albums: [1984, 5120, "OU812"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}`;
  }
  return "Hello";
};

console.log(greetGuitarist(jp));

// enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

// By default enums starts from 0 , but we can modify them

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

enum testEnum {
  U,
  D,
  C = 45,
  B,
  A,
}

console.log(testEnum.U, testEnum.A);
