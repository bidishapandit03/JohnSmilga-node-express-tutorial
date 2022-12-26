const { readFileSync, writeFileSync } = require("fs");
console.log('start');
const first = readFileSync(".\\content\\first.txt", "utf-8");
const second = readFileSync(".\\content\\second.txt", "utf-8");
const third = readFileSync(".\\content\\third.txt", "utf-8");
// console.log(first);
// console.log(second);
// console.log(third);
// writeFileSync('.\\content\\result-sync.txt', `Here is the result:${first},${second}`)

// writeFileSync(
//   ".\\content\\third.txt",
//   `This should be the third text`
// );

//to append
writeFileSync(
  ".\\content\\third.txt",
  `This text will be appended with the previous text`,
  { flag: "a" }
);
console.log('end');
console.log('starting with next one');

//time taking as it reads line by line therefore more number of users cannot be served