const  {
  readFile,
  classifyWords,
  filterAnagrams
} = require('./build/index.js')

console.log(filterAnagrams(classifyWords(readFile('./static/testWords.txt'))));