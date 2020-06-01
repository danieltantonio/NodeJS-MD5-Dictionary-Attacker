const prompt = require('prompt-sync')();
const crackFunc = require('./compareToMD5');

// Put in your MD5 Hash
let pass_hash = prompt('MD5-Hash: ');
// Select your dictionary file to read from, you must provide a "/" before putting in the file's name.
let dictionary = prompt('Dictionary (must be somewhere in this root dicrectory): ');

crackFunc(pass_hash, dictionary);
