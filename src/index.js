import fs from 'fs'

function readFile(fileName) {
  return fs.readFileSync(fileName).toString().split('\r\n');
}

function compareWords(words1, words2) {
  return words1.split('').sort().join('') === words2.split('').sort().join('');
}

function classifyAnagram(array, word) {
  for (let inner of array) {
    if (compareWords(inner[0], word)) {
      inner.push(word)
      return array;
    }
  }
  array.push([word]);
  return array;
}

function classifyWords(array) {
  const resultArray = [];
  array.forEach((word) => {
    classifyAnagram(resultArray, word);
  })
  return resultArray;
}

function filterAnagrams(array) {
  return array.filter(item => item.length > 1);
}

function findMaxNumAnagram(array) {
  return array.reduce((acc, curr) => curr.length > acc.length ? curr : acc);
}

function findLongestAnagram(array) {
  return array.reduce((acc, curr) => curr[0].length > acc[0].length ? curr : acc);
}

export {
  readFile,
  compareWords,
  classifyAnagram,
  classifyWords,
  filterAnagrams,
  findMaxNumAnagram,
  findLongestAnagram
}