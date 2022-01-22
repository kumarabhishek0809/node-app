const fs = require('fs');
const name = require('./utils.js')

//fs.writeFileSync('notes.txt','This file was created by node.js');

fs.appendFileSync('notes.txt','  Kumar append');
console.log(name)