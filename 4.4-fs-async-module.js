//blocking
const { readFile, writeFile } = require("fs");
console.log('start');
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(`from 1st part ${err}`);
    return;
  }
  //   console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(`from 2nd part ${err}`);
      return;
    }
    const second = result;
    // console.log(second);
    writeFile(
      "./content/result-async.txt",
      `Hey this has been copied from the async method of file system module ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(`from write part ${err}`);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting with new task');

// start
// starting with new task
// done with this task
//can handle many users