const os = require("os");
//current user
const user = os.userInfo();
// console.log(user);
//return users uptime in sec
const t = os.uptime();
// console.log(`The system uptime is ${t / 3600} hour`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
