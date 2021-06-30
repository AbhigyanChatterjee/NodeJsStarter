let path  = require("path");
// for(let i = 0; i < 10; i++) {
//     let dirPathMake = `Lecture-${i}`;
//     fileSys.writeFileSync(path.join(dirPathMake, "readme.md"), `# readme for lecture - ${i}`);
// }
let ext = path.extname(path.join(__dirname,"abc.js"));
console.log("Ext : ", ext);

let name = path.basename(__dirname);
console.log(name);

let baseName = path.basename(path.join(__dirname, "abc.js"));
console.log(baseName);

