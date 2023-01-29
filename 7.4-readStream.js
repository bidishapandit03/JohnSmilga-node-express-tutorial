//In fs sync or async we have assigned the readfile to a variable
//if the file size becomes huge the variable can be a problem
//read stream helps in this case
const { createReadStream } = require("fs");

// const stream = createReadStream('./content/big.txt');
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});
stream.on("data", (result) => {
  console.log(result);
  //console.log(`received ${result.length}bytes of data`);
});
stream.on("error", (err) => console.log(err));
