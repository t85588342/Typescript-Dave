let myName: string = "Tushar";
let num: number;
let isLoading: Boolean;
let alb: any; // use with caution
let album: number | string; // union type → can only be number or string

myName = "Tushar Dongre";
num = 69420;
isLoading = true;
album = "1984";

const sum = (a: number, b: number) => {
  return a + b;
};

let postId: number | string;
let isActive: number | boolean;
let re: RegExp = /\+/g;
