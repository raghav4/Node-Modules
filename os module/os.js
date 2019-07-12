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

const platform = os.platform();
console.log(platform);

const type = os.type();
console.log(type);

const release = os.release();
console.log(release);

const upTime = os.uptime();
console.log(upTime);

const userInfo = os.userInfo();
console.log(userInfo);