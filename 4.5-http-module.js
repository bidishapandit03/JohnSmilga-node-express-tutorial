const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello,welcome to our hmepage");
  } else if (req.url === "/about") {
    res.write("here is our short history");
  } else {
    res.write(
      '<h1>Oops!</h1><p>We cant find the page</p><br><a href=" / ">Back Home</a>'
    );
  }
  res.end();
});
server.listen(5000);
//listen is asynchronous and the process will always stay alive
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("request event");
//   res.end("hello world");
// });

// server.listen(5000, () => {
//   console.log("Server listening on port:5000...");
// });
