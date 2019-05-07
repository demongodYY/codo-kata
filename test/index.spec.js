import chai from 'chai';
chai.should();

import {
  ArgParser
} from '../src/index'

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('test args parse', () => {
  const argParser = new ArgParser([
    { flag: 'd', type: 'string', default: '' },
    { flag: 'p', type: 'number', default: 0 },
    { flag: 'f', type: 'boolean', default: false },
    { flag: 'm', type: 'numberArray', default: [] },
    { flag: 'n', type: 'strArray', default: [] }
  ]);

  it('test create schema object', () => {
    argParser.schema.should.be.an('array');
    argParser.schema.length.should.be.eq(5);
  });
  
  it('test default arg', () => {
    const parsedArg = argParser.parseArgs([]);
    parsedArg['d'].should.be.eq('');
    parsedArg['p'].should.be.eq(0);
    parsedArg['f'].should.be.eq(false);
  });

  it('test num arg',() => {
    argParser.parseArgs([['p', '8080']])['p'].should.be.eq(8080);
    argParser.parseArgs([['p', '-8080']])['p'].should.be.eq(-8080);
  });

  it('test string arg', () => {
    argParser.parseArgs([['d', '/dev/bin']])['d'].should.be.eq('/dev/bin');
  });

  it('test boolean arg', () => {
    argParser.parseArgs([['f']])['f'].should.be.eq(true);
  });

  it('test error num arg input', () => {
    (() => {argParser.parseArgs([['p', 'abc']])}).should.be.throw();
  });

  it('test input error arg', () => {
    (() => {argParser.parseArgs([['x', 'abc']])}).should.be.throw();
  });

  it('test input multi args', () => {
    const parsedArg = argParser.parseArgs([['d', '/dev/bin'], ['f'], ['p','8080']]);
    parsedArg['d'].should.be.eq('/dev/bin');
    parsedArg['p'].should.be.eq(8080);
    parsedArg['f'].should.be.eq(true);
  });

  it('test numArray arg', ()=> {
    argParser.parseArgs([['m', '1,2,3']])['m'].should.have.members([1,2,3]);
  });

  it('test strArray arg', () => {
    argParser.parseArgs([['n', 'a,b,c']])['n'].should.have.members(['a','b','c']);
  });

  it('test input error num in numArray', () => {
    (() => {argParser.parseArgs([['m', '1,d,3']])}).should.be.throw();
  });
});