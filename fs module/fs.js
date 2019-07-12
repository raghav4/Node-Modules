const fs = require('fs');

// Synchronous 
let files = fs.readdirSync('./');
console.log(files);

// Asynchronous

fs.readdir('./',(err,files)=>{
    if(err) console.log('Error',err);
    else console.log(files);
});