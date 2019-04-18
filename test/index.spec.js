import chai from 'chai';
chai.should();

import {
  readFile,
  compareWords,
  pushAnagram
} from '../src/index.js'

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('find Anagrams', () => {
  it('read file and genrate array', () => {
    readFile('static/words.txt').should.be.an('array');
    readFile('static/words.txt').length.should.be.equal(24);
  })

  it('compare two words is anagram', () => {
    compareWords('fresher', 'refresh').should.eq(true);
    compareWords('bird', 'dog').should.eq(false);
  })

  it('push anagram to same array', () => {
    const testArray = ['fresher'];
    pushAnagram(testArray, 'refresh', compareWords).should.have.members(['fresher', 'refresh']);
    pushAnagram(testArray, 'dog', compareWords).should.not.have.members(['dog']);
  })


})