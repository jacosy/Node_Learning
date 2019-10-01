// Import npm chalk package
const chalk = require('chalk');
const yargs = require('yargs');
const note = require('./note');


//console.log(note.getNotes());
//console.log(process.argv);
//console.log(yargs.argv.title);

// chalk samples
//console.log(chalk.blue('Success!'));
//console.log(chalk.red.bold.bgWhite.bold('red with white background!'));
//console.log(chalk.blue.bgRed('Hello world!'));

//Add Command
yargs.command('add', 'Add a new note', function (yargs) {
    return yargs.option('title', {
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
    }).option('body', {
        describe: 'Note Body',
        demandOption: true,
        type: 'string'
    });
}, function (argv) {
    const title = argv.title;
    const body = argv.body;
    if (note.addNote(title, body)) {
        console.log(`Added the Note successfully.\nTitle: ${title}, Body: ${body}`);
    } else {
        console.log(`Note Title was Taken!`);
    }
});

// Remove Command
yargs.command('remove', 'Remove a note', function (yargs) {
    return yargs.option('title', {
        describe: 'The title needs to be removed',
        demandOption: true,
        type: 'string'
    });
}, function (argv) {
    const title = argv.title;
    const result = note.removeNote(title);
    if (result) {
        console.log(chalk.bgGreen(`The Title: "${title}" was removed successfully!`));
    } else {
        console.log(chalk.bgRed(`The Title: "${title}" was not found!`));
    }
});

// Read Command
yargs.command('read', 'Read a note', function () {
    console.log('read one note!');
});

// List Command
yargs.command('list', 'List out all the notes', function () {
    const noteTitls = note.listNotes();
    console.log(chalk.black.bold.bgWhite(noteTitls));
});

yargs.argv;
//console.log(yargs.argv);