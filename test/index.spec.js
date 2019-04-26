import chai from 'chai';
chai.should();

import {
  fizzBuzz
} from '../src/index'

describe('test', () => {
  it('test test', () => {
    true.should.be.equal(true);
  })

  it('test fizzbuzz', () => {
    const testData = [
      {num: 2, result:'2'},
      {num: 3, result:'fizz'},
      {num: 13, result:'fizz'},
      {num: 5, result:'buzz'},
      {num: 52, result:'buzz'},
      {num: 15, result:'fizzbuzz'},
      {num: 51, result:'fizzbuzz'},
      {num: 53, result:'fizzbuzz'}
    ]
    testData.forEach((testItem) => {
      fizzBuzz(testItem.num).should.be.equal(testItem.result);
    })
  })

})
