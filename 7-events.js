//event-driven programming
//used heavily in Node.js
const EventEmitter = require("events");
const customEmitter = new EventEmitter();
customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} with id${id}`);
});

customEmitter.on("response", () => {
  console.log(`Some other logic`);
});
customEmitter.emit("response", "john", 38);
