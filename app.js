//event-driven programming
//used heavily in Node.js
//the order matters-first we have to listen then emit
const EventEmitter = require("events");
const customEmitter = new EventEmitter();
customEmitter.on("response", () => {
  console.log(`Some other logic`);
});
customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} with id${id}`);
});

customEmitter.emit("response", "john", 38);
