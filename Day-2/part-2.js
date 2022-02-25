const input = require("./input");

const answer = () => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i <= input.arr.length - 1; i++) {
    let command = input.arr[i].split(" ");
    if (command[0] === "forward") {
      horizontal += Number(command[1]);
      depth = depth + Number(command[1]) * aim;
    } else if (command[0] === "down") {
      aim += Number(command[1]);
    } else if (command[0] === "up") {
      aim -= Number(command[1]);
    }
  }
  return horizontal * depth;
};

console.log(answer());
