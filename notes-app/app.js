const fs = require('fs');
const utils = require('./utils.js')
const getNotes = require('./notes.js');
const chalk = require('chalk');

//fs.writeFileSync('notes.txt','This file was created by node.js');

fs.appendFileSync('notes.txt','  Kumar append');

//console.log(sum);
console.log(utils(2,-4))

console.log(getNotes)
console.log(chalk.blue('Hello world'))

console.log(process.argv);