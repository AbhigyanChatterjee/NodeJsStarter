let fileSys = require("fs");
let binData = fileSys.readFileSync("ind.js");
console.log("binary Data : " + binData);
// files -> CRUD(create, read, update, delete)
// open -w, readFileSync, appendFileSync, unlinkSync
// writefilesync
// folders -> C        ` R          ` U       D
//          mkdirSync  `readDirSync   -      rmDirSync
// exist Sync, LstatSync
// fileSys.openSync("abhi.txt", "w");
// writefilesync replaces info
// fileSys.writeFileSync("abhi.txt", "Main huun legend mujhpe likhi jaani chahiye book");
// fileSys.appendFileSync("abhi.txt", "Sirf main hi legend nahi huun sab hai legend!!");
// let txtFile = fileSys.readFileSync("abhi.txt");
// console.log( "text data : " + txtFile);
// fileSys.mkdirSync("myDirectory");
// fileSys.writeFileSync("myDirectory/abhi.txt", "My content is gold");
// read dir
// let content = fileSys.readdirSync("myDirectory");
// console.log(content);
// for(let i = 0; i < content.length; i++) {
//     console.log("files ", content[i], " removed");
//     //remove files
//     fileSys.unlinkSync("myDirectory/" + content[i]);
// }
//remove directory
// fileSys.rmdirSync("myDirectory");


// fileSys.existsSync() -> file exist in the path
// let exist = fileSys.existsSync("abc.txt");
// console.log(exist);
// fileSys.lstatSync() -> is it a path of file or folder 
// let detailObj = fileSys.lstatSync(__dirname + "//filesys.js");
// let ans = detailObj.isFile();
// console.log(ans);
// ans = detailObj.isDirectory();
// console.log(ans);

// for(let i = 0; i < 10; i++) {
//     let dirPathMake = `Lecture-${i}`;
//     fileSys.writeFileSync(dirPathMake + "//" + "readme.md", `# readme for lecture - ${i}`);
// }

// for(let i = 0; i < 10; i++) {
//     let delFile = `Lecture-${i}`;
//     fileSys.unlinkSync(/delFile);
// }
