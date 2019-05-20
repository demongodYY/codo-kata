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

  it('get word flag', () => {
      anagram.getWordFlag('cat').should.be.equal('act');
  });

  it('classify wordsList', () => {
    anagram.getClassifyWords()['act'].should.have.members(['act', 'cat']);
  });

  it('filter anagrams array', () => {
    anagram.getAnagrams().length.should.be.equal(5);
  });


});