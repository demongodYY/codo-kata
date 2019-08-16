import chai from 'chai';
chai.should();

import {
  isPalindromic,
  findPalindromicWithlength,
  findLogestPalindromic
} from '../src/index'

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('longest palindromic test', () => {
  it('is palindromic string', () => {
    isPalindromic('abc').should.be.eq(false);
    isPalindromic('abba').should.be.eq(true);
  });

  it('find palindromic with length', () => {
    findPalindromicWithlength('abbac',5).should.be.eq('');
    findPalindromicWithlength('abbac',4).should.be.eq('abba');
    findPalindromicWithlength('cbbd',2).should.be.equal('bb');
  });

  it('find longest palindromic', () => {
    findLogestPalindromic('babad').should.be.equal('bab');
    findLogestPalindromic('cbbd').should.be.equal('bb');
    findLogestPalindromic('a').should.be.equal('a');

  })
})