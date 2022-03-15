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

const trial = () => {
  let o2Generator = input;
  // let co2Scrubber = input;

  for (let i = 0; i <= o2Generator[0].length - 1; i++) {
    let zero = 0;
    let one = 0;
    for (let j = 0; j < o2Generator.length; j++) {
      if (o2Generator[j][i] === "0") {
        zero++;
      } else if (o2Generator[j][i] === "1") {
        one++;
      }
    }
    console.log(`zero: digit ${i + 1}, ${zero}`);
    console.log(`one: digit ${i + 1}, ${one}`);

    if (zero <= one) {
      zero = 0;
      o2Generator = o2Generator.filter((binary) => binary[i] === "1");
      // co2Scrubber = co2Scrubber.filter((binary) => binary[i] === "0");
      // console.log(co2Scrubber);
    } else if (one < zero) {
      one = 0;
      o2Generator = o2Generator.filter((binary) => binary[i] === "0");
      // co2Scrubber = co2Scrubber.filter((binary) => binary[i] === "1");
      // console.log(o2Generator);
    }
  }
  return parseInt(o2Generator.join(""), 2); // * parseInt(co2Scrubber.join(""), 2);
};

console.log(trial());

/*
1. loop through the first digit
2. count how many 0 and 1 there are in the first digit
3. if there is more zero than one, filter the input array that has zero in the first digit (and vise versa)

Continue to filter through until there is the last element
*/
