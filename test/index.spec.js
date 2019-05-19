import chai from 'chai';
chai.should();

import Anagram from '../src/index.js';
import fs from 'fs';

describe('Canary test', () => {
  it('simple test', () => {
    (true).should.be.equal(true);
  });
});

describe('Anagram test', () => {
  let anagram;
  beforeEach(() => {
    const fileName = 'static/testWords.txt'
    const testWordArray = fs.readFileSync(fileName).toString().split('\r\n');
    anagram = new Anagram(testWordArray);
  });

  it('init anagram with file', () => {
    anagram.originWordsList.length.should.be.equal(177);
  });

  it('compare two word is anagram', () => {
    anagram.isAnagram('two', 'tow').should.be.equal(true);
    anagram.isAnagram('two', 'one').should.be.equal(false);
  });

  it('pop first word', () => {
    const firstWord = anagram.originWordsList[0];
    anagram.getFirstWord().should.be.equal(firstWord);
  });

  it('find anagram', () => {
    const firstWord = anagram.getFirstWord();
    anagram.getAnagramArray(firstWord).should.be.have.members(['act', 'cat']);
  });

  it('filter origin wordslist', () => {
    const anagramArray = anagram.getAnagramArray(anagram.getFirstWord());
    const anagramLength = anagramArray.length;
    const originLength = anagram.originWordsList.length;
    anagram.filterWordsList(anagramArray);
    anagram.originWordsList.length.should.be.equal(originLength - anagramLength);
  });

  it('get anagrams' , () => {
    anagram.getAnagrams().length.should.be.equal(5);
  })

});