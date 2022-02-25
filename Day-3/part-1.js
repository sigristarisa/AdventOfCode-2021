const input = require("./input");

const checkGamma = () => {
  const gamma = [];
  for (let i = 0; i <= 12; i++) {
    let zero = 0;
    let one = 0;
    for (let j = 0; j <= input.arr.length - 1; j++) {
      if (input.arr[j][i] === "0") {
        zero++;
      } else if (input.arr[j][i] === "1") {
        one++;
      }
    }
    if (zero < one) {
      gamma.push("1");
    } else if (zero > one) {
      gamma.push("0");
    }
  }
  return parseInt(gamma.join(""), 2);
};

const checkEpsilon = () => {
  const epsilon = [];
  for (let i = 0; i <= 12; i++) {
    let zero = 0;
    let one = 0;
    for (let j = 0; j <= input.arr.length - 1; j++) {
      if (input.arr[j][i] === "0") {
        zero++;
      } else if (input.arr[j][i] === "1") {
        one++;
      }
    }
    if (zero < one) {
      epsilon.push("0");
    } else if (zero > one) {
      epsilon.push("1");
    }
  }
  return parseInt(epsilon.join(""), 2);
};

console.log(checkEpsilon() * checkGamma());
