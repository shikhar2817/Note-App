const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your Notes.....'
}

const addNote = (title,body) => {
    const notes = loadNote()
    const duplicates = notes.find((note) => note.title === title)
    if(!duplicates){
        notes.push({
            title: title,
            body : body,
        })
        saveFile(notes)
        console.log(chalk.green.inverse('Note Has been Added Successfully!'))
    }else{
        console.log(chalk.red.inverse('Title has been Taken!'))
    }
}


const loadNote = () => {
    try{
        const o = fs.readFileSync('note.json')
        const out = o.toString()
        return JSON.parse(out)
    }catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNote()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed!'))
        saveFile(notesToKeep)
    }else{
        console.log(chalk.red.inverse('Note Not Found!'))
    }
}

const saveFile = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('note.json',dataJSON)
}
const listNotes = () => {
    const dataNOTE = loadNote()
    console.log(chalk.blue.bold.inverse('Your Notes'))
    dataNOTE.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNote()
    const match = notes.find(note => note.title === title)

    if(match){
        console.log(chalk.bold.bgBlueBright(match.title))
        console.log(chalk.greenBright(match.body))
    }else{
        console.log(chalk.redBright.inverse('No Note found!'))
    }
}

module.exports = {
    getNotes : getNotes,
    loadNote : loadNote,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote,
}