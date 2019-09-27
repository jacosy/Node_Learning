const fs = require('fs');

//fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
//fs.appendFileSync('notes.txt', '\nAppend some text viw "appendFileSync" method');

const fileName = 'notes.json';

function getNotes() {
    const dataJson = fs.readFileSync(fileName, 'utf8');
    return JSON.parse(dataJson);
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync(fileName);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
}

function append(msg) {
    fs.appendFile(fileName, msg);
}

function addNote(title, body) {
    const notes = loadNotes();
    notes.push({
        title,
        body
    });
    saveNotes(notes);
}

function saveNotes(notes){
    const dataJSON = json.stringify(notes);
    fs.writeFileSync(fileName, dataJSON);
}

module.exports = { append, getNotes };