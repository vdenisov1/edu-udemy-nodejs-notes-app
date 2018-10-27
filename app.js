console.log('Starting App.\n');
/**
 * Logic for require:
 *   1. Look for Core package.
 *   2. Look in node_modules folder (global and then local)
 *   3. Look for relative path.
 */
const fs = require('fs');
const _ = require("lodash");
const yargs = require('yargs');
const notes = require('./notes');

const titleOptions = {
    describe: "Title of note",
    demand: true,
    alias: "t"
};

const bodyOptions = {
    describe: "Body of note",
    demand: true,
    alias: "t"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("read", "Read a note", {
    title: titleOptions
  })
  .command("remove", "Remove a note", {
    title: titleOptions
  })
  .command("list", "List all notes")
  .help().argv;
  
const command = argv._.pop();

if(command === "add") {
    let note = notes.addNote(argv.title, argv.body);

    if (typeof note !== "undefined") {
        console.log(`Added note ${note.title}: ${note.body}`);
    } else {
        console.log(`Note with title ${argv.title} already exists`);
    }
} else if(command === "list") {
    let allNotes = notes.getAll();
    console.log(`${allNotes.length} notes:`);

    for (note of allNotes) {
      console.log(`  ${note.title}`);
    }
} else if (command === "read") {
    let note = notes.readNote(argv.title);

    if (typeof note !== "undefined") {
      console.log(`${note.title}:\n${note.body}\n\n`);
    } else {
      console.log(`Note ${argv.title} does not exist`);
    }

 } else if (command === "remove") {
    if (notes.removeNote(argv.title)) {
      console.log(`Removed Note ${argv.title}`);
    } else {
      console.log(`Note ${argv.title} does not exist`);
    }
 } else {
    console.log("Command not recognized");
}