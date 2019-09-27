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
    //console.log('add a new note!', argv);
    console.log(`Title: ${argv.title}\nBody: ${argv.body}`);
});

// Remove Command
yargs.command('remove', 'Remove a note', function () {
    console.log('remove one note!');
});

// Read Command
yargs.command('read', 'Read a note', function () {
    console.log('read one note!');
});

// List Command
yargs.command('list', 'List out all the notes', function () {
    console.log('list out all the notes!');
});

yargs.argv;
//console.log(yargs.argv);