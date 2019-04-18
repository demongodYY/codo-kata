import fs from 'fs'

function readFile(fileName) {
  return fs.readFileSync(fileName).toString().split('\r\n');
}

function compareWords(words1, words2) {
  return words1.split('').sort().join('') === words2.split('').sort().join('');
}

export {
  readFile,
  compareWords
}