const { writeFileSync } = require("fs");
//for really big text set the limit according to the test for eg-10000 or 1000000
for (let i = 0; i < 1000; i++) {
  writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });
}
