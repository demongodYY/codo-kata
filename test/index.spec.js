import chai from 'chai';
chai.should();

import { argsParse } from '../src/index'

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('test args parse', () => {
  it('test input empty args', () => {
    const defaultArgs = {
      'f': false,
      'p': 0,
      'd': ''
    }
    JSON.stringify(argsParse('')).should.be.equal(JSON.stringify(defaultArgs));
  });

  it('test input f args', () => {
    argsParse('-f')['f'].should.be.equal(true);
  });

  it('test input p args', () => {
    argsParse('-p 8080')['p'].should.be.equal(8080);
  });

  it('test input p error type', () => {
    (() => argsParse('-p ffff')).should.throw();
  });

  it('test input d args', () => {
    argsParse('-d /dev/arg')['d'].should.be.eq('/dev/arg');
  });

  it('test input error arg', () => {
    (() => argsParse('-x 999')).should.throw();
  });

  it('test input more args', () => {
    const parsedArgs = argsParse('-f -p 8080 -d /dev/arg');
    parsedArgs['f'].should.be.eq(true);
    parsedArgs['p'].should.be.eq(8080);
    parsedArgs['d'].should.be.eq('/dev/arg');
  });
})