const fs = require('fs');
const NOTE_FILENAME = 'notes-data.json';

if(!fs.existsSync('notes-data.json')) {
    fs.writeFileSync(NOTE_FILENAME, "[]");
    console.log(`File ${NOTE_FILENAME} not found. Created file.`);
}

let notes = require(`./${NOTE_FILENAME}`);

let noteExists = (title) => {
    return typeof notes.find((element) => { return element.title === title; }) !== 'undefined';
};

let addNote = (title, body) => {
    if(!noteExists(title)) {
        const note = { title: title, body: body };
        notes.push(note);
        fs.writeFileSync(NOTE_FILENAME, JSON.stringify(notes));
        return note;
    }
};

let getAll = () => {
    return notes;
};

let readNote = (title) => {
    return notes.find((element) => { return element.title === title });
};

let removeNote = (title) => {
    if(noteExists(title)){
        notes = notes.filter((element) => { return element.title !== title; });
        fs.writeFileSync(NOTE_FILENAME, JSON.stringify(notes));
        return true;
    }

    return false;
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    removeNote: removeNote,
    readNote: readNote
};