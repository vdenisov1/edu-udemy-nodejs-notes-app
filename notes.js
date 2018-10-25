console.log('Starting notes.js');

module.exports.addNote = () => {
    // Arrow function does not bind the keyword 'this'.
    console.log('addNote');
    return 'New note';
};

module.exports.add = (a, b) => {
    return a + b;
};