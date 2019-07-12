const os = require('os');

const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log(`Total Memory : ${totalMem} & freeMem : ${freeMem}`);   

const osArch = os.arch();
console.log(osArch);

const cpus = os.cpus();
console.log(cpus);

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);