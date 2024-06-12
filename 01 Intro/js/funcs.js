// ---------------- Functions ----------------
// 1 - function declaration
function getSumm(a, b) {
    if (a === 0 && b === 0) {
        console.warn("All numbers are equals to zero");
    }

    return a + b;
}

let res = getSumm(5, 8);
console.log("Result:", res);

getSumm(0, 0);

// 2 - function expression
const getMult = function (a, b) {
    if (b === 0) throw new Error("Can not divide by zero!");

    return a * b;
}

// 3 - arrow functions
let func = (a, b) => a * b;

let res1 = getMult(50, 10);
let res2 = func(50, 10);