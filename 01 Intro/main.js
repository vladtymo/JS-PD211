// -------------- Console --------------
console.log("Some information message!");
console.warn("Some warning message!");
console.error("Some error message!");

// -------------- Data Types --------------
// create variable: let name = value;

let counter = 1;        // number
let price = 120.59;     // number

let username = "vlad.tymo";     // string
let letter = "A";               // string
let letter2 = 'F';              // string

let msg = "Hello \"dear\" 'Vlad'"; // string

let isValid = true;

let selectedProduct = null;
let undefinedValue = undefined; // bad practice

let arr = [1, 2, 3];

let coord = {
    x: 10,
    y: -55
}

console.log(coord);
console.log(coord.x);
console.log(coord.z);
console.log(coord.hello);

console.log(arr);

// ------ check data type
console.log(typeof (price));
console.log(typeof (username));
console.log(typeof (isValid));
console.log(typeof (selectedProduct));
console.log(typeof (undefinedValue));
console.log(typeof (arr));
console.log(typeof (coord));

// ------ JS has dynamic/weak/duck typing

price = "100000$";      // change number to string
arr = [10, "10", true, [1, 2, 3], coord, (a, b) => a + b];

console.log(arr[4].y);
console.log(arr[5](4, 10));
