let singleQuote = 'Abhigyan Chatterjee single';
let doubleQuote = "Abhigyan Chattejerr double";

console.log(singleQuote);
console.log(doubleQuote);

let c = singleQuote.charAt(1);
console.log(c);

doubleQuote = doubleQuote.substring(1, 4);
// ascii value of char
let asc = singleQuote.charCodeAt(3);
console.log(asc, singleQuote.charAt(3));

// split(delimeter)
// understand 18th comment
// let splt = singleQuote.charAt('i');
// doubleQuote = doubleQuote.trim();
console.log(doubleQuote);
let splt = singleQuote.split(' ');
console.log(splt);
let str = splt.join('_');
console.log(str);