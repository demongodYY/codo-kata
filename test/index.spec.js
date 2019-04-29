import chai from 'chai';
chai.should();

import { argsParse } from '../src/index'

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('test args parse', () => {
  it('empty args should be return default args', () => {
    argsParse('')['f'].should.be.equal(false);
    argsParse('')['p'].should.be.equal(0);
    argsParse('')['d'].should.be.equal('');
  });

  it('test num arg input', () => {
    argsParse('-p 8080')['p'].should.be.equal(8080);
    argsParse('')['f'].should.be.equal(false);
    argsParse('')['d'].should.be.equal('');
  });

  it('test error num input', () =>{
    (() => argsParse('-p xxx')) .should.be.throw();
  });

  it('test bool input arg', () => {
    argsParse('-f')['f'].should.be.equal(true);
  });

  it('test string input arg', () => {
    argsParse('-d /dev/src')['d'].should.be.equal('/dev/src');
  });

  it('test error input arg', () => {
    (() => argsParse('-x 666')).should.throw();
  });

  it('parse more args', () => {
    const parsedArgs = argsParse('-f -p 8080 -d /dev/src');
    parsedArgs['f'].should.be.equal(true);
    parsedArgs['p'].should.be.equal(8080);
    parsedArgs['d'].should.be.equal('/dev/src');
  })

})