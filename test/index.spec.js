import chai from 'chai';
chai.should();

import {
  fizz,
  buzz,
  trNum,
  fizzBuzz
} from '../src/index'

describe('test test', () => {
  true.should.be.equal(true);
})

describe('test fizz buzz', () => {
  it('test fizz function', () => {
    fizz(3, '').should.be.equal('Fizz');
    fizz(6, '').should.be.equal('Fizz');
  });

  it('test buzz function', () => {
    buzz(5, '').should.be.equal('Buzz');
    buzz(10, '').should.be.equal('Buzz');
  });

  it('test translate function', () => {
    trNum(4, '').should.be.equal('4');
    trNum(5, 'Buzz').should.be.equal('Buzz');
  });

  it('test combine function', () => {
    fizzBuzz(2).should.be.equal('2');
    fizzBuzz(3).should.be.equal('Fizz');
    fizzBuzz(5).should.be.equal('Buzz');
    fizzBuzz(15).should.be.equal('FizzBuzz');
  })

})