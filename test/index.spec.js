import chai from 'chai';
chai.should();

import {
  readFile,
  compareWords,
  classifyAnagram,
  classifyWords,
  filterAnagrams,
  findMaxNumAnagram,
  findLongestAnagram
} from '../src/index.js'

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('find Anagrams', () => {
  it('read file and genrate array', () => {
    readFile('static/words.txt').should.be.an('array');
    readFile('static/words.txt').length.should.be.equal(338882);
  })

  it('compare two words is anagram', () => {
    compareWords('fresher', 'refresh').should.eq(true);
    compareWords('bird', 'dog').should.eq(false);
  })

  it('push anagram to inner array or generate new inner array', () => {
    const testArray = [
      ['fresher']
    ]
    classifyAnagram(testArray, 'refresh')[0].should.have.members(['fresher', 'refresh']);
    classifyAnagram(testArray, 'refresh').length.should.equal(1);
    classifyAnagram(testArray, 'dog').length.should.equal(2);
  })

  it('classify all words', () => {
    const testArray = [
      'mano',
      'dog',
      'cat',
      'act',
      'manoaos',
      'fresher', 
      'refresh'
    ]
    classifyWords(testArray).length.should.equal(5);
  })

  it('filter anagrams', () => {
    const testArray = [
      [ 'fresher', 'refresh'],
      ['dog']
    ]
    filterAnagrams(testArray).length.should.equal(1);
  })

  it('find maximum anagram', () => {
    const result = filterAnagrams(classifyWords(readFile('static/testWords.txt')));
    findMaxNumAnagram(result).should.have.members([ 'paste', 'pates', 'peats', 'septa', 'spate', 'tapes', 'tepas' ]);
  })

  it('find longest words anagram', () => {
    const result = filterAnagrams(classifyWords(readFile('static/testWords.txt')));
    findLongestAnagram(result).should.have.members([ 'punctilio', 'unpolitic' ]);
  })

})