import chai from 'chai';
chai.should();

import {
  argsParse,
  parseStrArg,
  parseBoolArg,
  parseNumArg,
  checkErrorArg,
  parseStrArgs
} from '../src/index'

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('test args parse', () => {
  it('parse str arg', () => {
    parseStrArg('-d /dev/src')['d'].should.be.equal('/dev/src');
  });

  it('parse bool arg', () => {
    parseBoolArg('-f')['f'].should.be.equal(true);
  });

  it('parse num arg', () => {
    parseNumArg('-p 8080')['p'].should.be.equal(8080);
  });

  it('input error num', () => {
    (() => parseNumArg('-p xxx')).should.be.throw();
  });

  it('check error arg', () => {
    const defaultArgs = {
      'f': false,
      'p': 0,
      'd': ''
    };
    (() => checkErrorArg(defaultArgs, '-x 666')).should.be.throw();
  });

  it('parse string args', () => {
    parseStrArgs('-f -d /dev/src -p 8080').should.have.members(['-f ', '-d /dev/src', '-p 8080']);
  });

  it('parse all args', () => {
    const args = argsParse('-f -d /dev/src -p 8080');
    args['f'].should.be.equal(true);
    args['d'].should.be.equal('/dev/src');
    args['p'].should.be.equal(8080);    
  });
  it('default args', () => {
    const args = argsParse('');
    args['f'].should.be.equal(false);
    args['d'].should.be.equal('');
    args['p'].should.be.equal(0);
  })
})