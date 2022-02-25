const input = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

const checkGamma = () => {
  const gamma = [];
  for (let i = 0; i <= 5; i++) {
    let zero = 0;
    let one = 0;
    for (let j = 0; j <= input.length - 1; j++) {
      if (input[j][i] === "0") {
        zero++;
      } else if (input[j][i] === "1") {
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

console.log(checkGamma());
