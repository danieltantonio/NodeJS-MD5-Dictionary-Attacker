const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const md5 = require('md5');
const prompt = require('prompt-sync')();
const chalk = require('chalk');

// Function takes the hash and the dictionary file.
function crackFunc(hash, dic) {
  let unhash = '';
  if(hash === '') {  //If the hash or dictionary is left blank by the user input, program will close.
    prompt('MD5-Hash was left blank, exiting program.');
    return;
  } else if (dic === '') {
    dic = prompt('Dictionary was left blank, exiting program.');
    return;
  }

  const instream = fs.createReadStream(__dirname + dic, 'utf8'); // Finds the directory of this file and you must provide the file location for the dictionary.
  const outstream = new stream;
  const rl = readline.createInterface(instream, outstream);

  rl.on('line', (line) => {
    console.log(line);
    if(md5(line) === hash) { // If the converted current line matches with the hashed MD5, the stream will close.
      unhash = line;
      console.log(`${chalk.bgGreen("Match found: ")} ${unhash}`);
      rl.close();
      rl.removeAllListeners();
    }
  });

  rl.on('close', () => {
    if(unhash === '') {
      console.log(`${chalk.bgRed('ERROR:')} No words that match in this dictionary, please try a new dictionary file...`);
    }
    console.log(`Program exitting...`);
  });
};

module.exports = crackFunc;
