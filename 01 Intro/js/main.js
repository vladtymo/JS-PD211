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

let isValid = true;             // boolean

let selectedProduct = null;     // null
let undefinedValue = undefined; // undefined (bad practice)

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

// ------ constants
const koef = 3.88;
//koef += 10; // error

// -------------- Browser Dialogs --------------
// ------ alert()
alert("Some alert!");

// string concatenation str + str
alert("Hello, dear: " + username);
// string interpolation: `str ${...}`
alert(`Hello, dear: ${username}`);

// ------ prompt()
// convert to number: +"str" Number(value)
let year = +prompt("Enter current year:");

console.log(`Current year is ${year}`);
console.log(`Next year is ${year + 1}`);

console.log("1" + "1"); // string + string
console.log(1 + 1);     // number + number

console.log("1" + 1); // string + number = string
console.log("5" * "3"); // string * string = number

// ------ confirm()
let like = confirm("Do you like JS?");

if (like) {
    console.log("Super");
}
else {
    console.log("Bad");
}

// thernary operator: (condition) ? true_value : false_value
console.log(like == true ? "Super" : "Bad");

// -------------- statements --------------
if (5 > 10)
    console.log("if");
else {

}

switch (counter) {
    case 1:
        break;
    case 2:
        break;

    default:
        break;
}

for (let i = 0; i < 10; i++) {
}
