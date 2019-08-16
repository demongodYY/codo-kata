import chai from 'chai';
chai.should();

import {
  getReverseStr,
  findPalindromicSubString,
  getLogestPalindromic
} from '../src/index'

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('longest palindromic test', () => {
  it('get reverse str', () => {
    getReverseStr('abc').should.be.eq('cba');
  });

  it('find palindromic substring with width', () => {
    findPalindromicSubString('abbad','dabba',4).should.be.eq('abba');
    findPalindromicSubString('abbc','cbba',2).should.be.eq('bb');
    findPalindromicSubString('abcde','edcba',2).should.be.eq('');
    findPalindromicSubString('abcde','edcba',1).should.be.eq('a');
  })

  it('get longest palindromic',() => {
    getLogestPalindromic('abbad').should.be.eq('abba');
    getLogestPalindromic('abbc').should.be.eq('bb');
    getLogestPalindromic('abadd').should.be.eq('aba');
  })

})