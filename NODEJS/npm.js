const chalk = require('chalk');
console.log(chalk.blue('Hello World!!'));

const fig = require('figlet');
console.log(fig.textSync("Abhigyan Chatterjee", "Cybersmall"));

console.log(chalk.blue(fig.textSync("Abhigyan")));