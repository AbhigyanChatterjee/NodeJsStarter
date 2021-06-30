// console.log("Abhigyan");
let cp = require("child_process");
// console.log("Opening camera");
// cp.execSync('cheese');
// console.log("Opened camera");

// console.log("Opening Google");
// cp.execSync('google-chrome https://www.google.com');
// console.log("Opened google");

console.log("Opening java script file");
let op = cp.execSync('node ind.js');
console.log("output : " + op);
console.log("Close java script file");
