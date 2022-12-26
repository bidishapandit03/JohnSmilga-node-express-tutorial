const path = require("path");

//separator property
console.log(path.sep);

const filePath = path.join("content", "subfolder", "text.txt");
console.log(filePath);

//getting the last file name only
const base = path.basename(filePath);
console.log(base);

//returning absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
