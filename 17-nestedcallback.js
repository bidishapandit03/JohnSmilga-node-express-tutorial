const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    //blocking code
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) console.log(`${i} ${j}`);
    }
    res.end("About Page");
  } else res.end("error");
});

server.listen(5000, () => {
  console.log("server is listening on port 3000");
});
