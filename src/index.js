import fs from 'fs'

function readFile(fileName) {
  return fs.readFileSync(fileName).toString().split('\r\n');
}

// function compareWords(words1, words2) {
//   return true;
// }

export {
  readFile,
  // compareWords
}