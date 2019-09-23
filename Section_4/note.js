const fs = require('fs');

//fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
//fs.appendFileSync('notes.txt', '\nAppend some text viw "appendFileSync" method');

const fileName = 'notes.txt';

function append(msg){
    fs.appendFile(fileName, msg);
}

function getNotes(){
    return fs.readFileSync(fileName, 'utf8');
}

module.exports = { name: fileName, append, getNotes };