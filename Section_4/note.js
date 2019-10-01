const fs = require('fs');
const chalk = require('chalk');

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

function listNotes() {
    const notes = loadNotes();
    return notes.reduce((pre, cur) => pre += cur.title + '\n', 'Your notes:\n');
}

function append(msg) {
    fs.appendFile(fileName, msg);
}

function readNote(title) {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note === undefined) {
        console.log(chalk.red.bold('No Note Found...'));
    } else {
        console.log(chalk.inverse.blue.bold('Title: ' + note.title))
        console.log('Body: ' + note.body);
    }
}

function addNote(title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (duplicateNote === undefined) {
        saveNotes({
            title,
            body
        });
        return true;
    }

    return false;
}

function removeNote(title) {
    const notes = loadNotes();
    const remainNotes = notes.filter(note => note.title !== title);
    saveNotes(remainNotes);
    return notes.length !== remainNotes.length;
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync(fileName, dataJSON);
}

module.exports = { addNote, removeNote, listNotes, readNote };