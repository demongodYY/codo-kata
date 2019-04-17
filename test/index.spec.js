import chai from 'chai';
chai.should();

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('find Anagrams', () => {
  it('compare two words is anagram', () => {
    compareWords('fresher', 'refresh').should.eq(true);
    compareWords('bird', 'dog').should.eq(false);
  })
})
