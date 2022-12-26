//Modules- they are the encapsulated code(that share that only we want)
const names = require('./3-names')
const sayHi=require("./3-utils")
const data = require("./3.1-alternativeModule")
// console.log(data);
require('./3.2-mindgrenade')//does not required to be stored in another variable
sayHi(names.john);
sayHi('susan');
sayHi(names.peter);
sayHi(data.newPerson.name)