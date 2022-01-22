const fs = require('fs');
const utils = require('./utils.js')
const getNotes = require('./notes.js');

//fs.writeFileSync('notes.txt','This file was created by node.js');

fs.appendFileSync('notes.txt','  Kumar append');

//console.log(sum);
console.log(utils(2,-4))

console.log(getNotes)