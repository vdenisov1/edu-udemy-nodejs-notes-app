console.log('Starting App.');
/**
 * Logic for require:
 *   1. Look for Core package.
 *   2. Look in node_modules folder (global and then local)
 *   3. Look for relative path.
 */
const fs = require('fs');
const os = require('os');
const _ = require("lodash");
const notes = require('./notes');

const username = os.userInfo().username;

console.log(_.isString(true));
console.log(_.isString('Test'));

console.log(_.uniq([2,1,2]));

fs.appendFile('greetings.txt', `Hello ${username}! You are ${notes.age}.\n`, (err) => {
    if(err) {
        console.log(`Unable to write to file: ${err}`);
    }
});