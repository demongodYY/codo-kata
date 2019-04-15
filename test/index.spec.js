import chai from 'chai';
import {  
  stringMatch,
  genAllAnagram,
  filterAnagram
} from '../src/index'
chai.should();

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('tow words', () => {
  it('Match two words concat string', () => {
    stringMatch('documenting', 'document', 'gin').should.be.eq(true);
    stringMatch('documenting', 'dog', 'cute').should.be.eq(false);
  });

  it('Iteration to generate all anagram', () => {
    const sourceData = [
      'acrobat', 'africa', 'alaska', 'albert', 'albino', 'album'
    ];
    genAllAnagram(sourceData).should.have.members([
      'acrobat,africa',
      'acrobat,alaska',
      'acrobat,albert',
      'acrobat,albino',
      'acrobat,album',
      'africa,alaska',
      'africa,albert',
      'africa,albino',
      'africa,album',
      'alaska,albert',
      'alaska,albino',
      'alaska,album',
      'albert,albino',
      'albert,album',
      'albino,album'
    ])
  });

  it('Filter anagram for string', () => {
    const sourceData = [
      'acrobat', 'africa', 'alaska', 'albert',  'cumning', 'document', 'gin'
    ];
    filterAnagram(genAllAnagram(sourceData), stringMatch).should.have.members([
      'document,gin'
    ])
  })
});