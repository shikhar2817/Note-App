const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
const note = require('./note.js')
const yargs = require('yargs')


yargs.command({
    command : 'add',
    describe : 'Add note to App.js',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true ,
            type : 'string',
        },
        body : {
            describe : 'Body of note',
            demandOption : true ,
            type : 'string',
        }
    },
    handler(argv){
        note.addNote(argv.title , argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'Removing note from the App.js',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true ,
            type : 'string',
        }
    },
    handler(argv){
        note.removeNote(argv.title)
    }
})

yargs.command({
    command : 'list',
    describe : 'Printing the List',
    handler(){
        note.listNotes()
    }
})

yargs.command({
    command : 'read',
    describe : 'Reading list items!',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string',
        }
    },
    handler(argv){
        note.readNote(argv.title)
    }
})
yargs.parse()
// console.log(yargs.argv)
