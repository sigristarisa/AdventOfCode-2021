const input = require("./input");

const answer = () => {
  let count = 0;
  for (let i = 0; i <= input.arr.length - 1; i++) {
    if (input.arr[i] < input.arr[i + 1]) {
      count++;
    }
  }
  return count;
};

console.log(answer());
