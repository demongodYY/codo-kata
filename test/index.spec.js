import chai from 'chai';
chai.should();

import {
  fizz,
  buzz,
  fizzBuzz
} from '../src/index'

describe('test test', () => {
  it('test test', () => {
    true.should.be.equal(true);
  })
})

describe('test fizzbuzz', () => {
  it('test fizz function without 3', () => {
    fizz(2).should.be.equal('');
    fizz(4).should.be.equal('');
  })

  it('test fizz function divide 3', () => {
    fizz(3).should.be.equal('fizz');
    fizz(6).should.be.equal('fizz');
  })

  it('test fizz function contain 3', () => {
    fizz(13).should.be.equal('fizz');
  })

  it('test buzz without 5', () => {
    buzz(4).should.be.equal('');
  })

  it('test buzz function divide 5', () => {
    buzz(10).should.be.equal('buzz');
  })

  it('test buzz function contain 5', () => {
    buzz(52).should.be.equal('buzz');
  })

  it('test fizzbuzz', () => {
    fizzBuzz(2).should.be.equal('2');
    fizzBuzz(6).should.be.equal('fizz');
    fizzBuzz(13).should.be.equal('fizz');
    fizzBuzz(10).should.be.equal('buzz');
    fizzBuzz(52).should.be.equal('buzz');
    fizzBuzz(15).should.be.equal('fizzbuzz');
    fizzBuzz(51).should.be.equal('fizzbuzz');
  })
})