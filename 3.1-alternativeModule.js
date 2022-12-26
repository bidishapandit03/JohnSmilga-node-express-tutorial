// const items = ['item1', 'item2']
//module.exports is already an object...so while multiple exports we are required to set up the property
module.exports.items=['item1','item2']
const person = {
    name: 'bob',
    age:23
}
// console.log(module);
module.exports.newPerson=person;
// console.log(module);