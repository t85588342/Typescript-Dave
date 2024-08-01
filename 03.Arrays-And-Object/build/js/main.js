"use strict";
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
let bands = [];
bands.push("Tushar");
console.log(bands);
// bands.push(true); // not allowed
// Tuple
let myTuple = ["Tushar", 28, true]; // has fixed length and elements needs to be in the order of datatype
let mixed = ["John", 1, false]; // not a tuple
mixed = myTuple; // allowed
// myTuple = mixed // not allowed
myTuple[1] = 25;
// myTuple[0] = 25 // not allowed
// Objects
let myObj;
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
// for now assume type and interface works in the same way
let evh = {
    name: "Eddie",
    active: true,
    albums: [1984, 5120, "OU812"],
};
// let evh: Guitarist = {
//   name: "Eddie",
//   albums: [1984, 5120, "OU812"],
// }; // not allowed as property "active" is missing
let jp = {
    active: false,
    albums: ["I", "II", "III"],
};
evh = jp; // allowed
// evh.years = 40 // not allowed 'cause years property is not defined in type Guitarist
// we can make property of a type optional
let evhj = {
    name: "Eddie",
    albums: [1984, 5120, "OU812"],
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return "Hello";
};
console.log(greetGuitarist(jp));
// enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
// By default enums starts from 0 , but we can modify them
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
var testEnum;
(function (testEnum) {
    testEnum[testEnum["U"] = 0] = "U";
    testEnum[testEnum["D"] = 1] = "D";
    testEnum[testEnum["C"] = 45] = "C";
    testEnum[testEnum["B"] = 46] = "B";
    testEnum[testEnum["A"] = 47] = "A";
})(testEnum || (testEnum = {}));
console.log(testEnum.U, testEnum.A);
