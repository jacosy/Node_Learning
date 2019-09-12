// Import npm chalk package
const chalk = require('chalk');
// Import npm validator package
const validator = require('validator');
const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
fs.appendFileSync('notes.txt', 'Append some text viw "appendFileSync" method');

// validator samples
console.log(validator.isEmail('bb@aa'));
console.log(validator.isEmail('bb.com'));
console.log(validator.isEmail('aa@bb.com'));
console.log(validator.isURL('http://test.com'));

// chalk samples
console.log(chalk.blue('Success!'));
console.log(chalk.red.bold.bgWhite.bold('red with white background!'));
console.log(chalk.blue.bgRed('Hello world!'));
