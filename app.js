var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text);
    //pipe method helps in pushing the readstream to write stream
    //we read in chunk and then write in chunk as well
    const fileStream = fs.createReadStream("./content/big.txt");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("err", (error) => {
      res.end(error);
    });
  })
  .listen(5000);
