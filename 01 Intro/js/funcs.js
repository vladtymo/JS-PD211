function getSumm(a, b) {
    if (a === 0 && b === 0) {
        console.warn("All numbers are equals to zero");
    }

    return a + b;
}

let res = getSumm(5, 8);
console.log("Result:", res);

getSumm(0, 0);