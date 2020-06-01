const md5 = require('md5');
const prompt = require('prompt-sync')();
let hashThis = prompt('Create MD5-Hash: ');

// Generate an MD5 token.
function hashFunc(toHash) {
  if(toHash === '') {
    toHash = prompt('Create MD5-Hash was left blank, try again: ');
    hashFunc(toHash);
  } else {
    console.log(md5(toHash));
  }
};

hashFunc(hashThis);
