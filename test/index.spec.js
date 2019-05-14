import chai from 'chai';
chai.should();

import {
  ArgParser,
  ArgsParser,
  ArgSchema,
  ArgSchemas
} from '../src/index'

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('test for create schemas', () => {
  it('create schema', () => {
    const argSchema = new ArgSchema('f', 'boolean', false);
    argSchema.flag.should.be.eq('f');
    argSchema.type.should.be.eq('boolean');
    argSchema.defaultValue.should.be.eq(false);
  });

  it('create schemas', () => {
    const argF = new ArgSchema('f', 'boolean', false);
    const argP = new ArgSchema('p', 'number', 0);
    const argSchemas = new ArgSchemas(argF, argP);
    argSchemas.length.should.be.eq(2);
  });
});

describe('test for single arg paser', () => {
  it('test boolean arg', () => {
    const argParser = new ArgParser('boolean');
    argParser.parse('f').f.should.be.eq(true);
  });

  it('test num arg', () => {
    const argParser = new ArgParser('number');
    argParser.parse('p', '8080').p.should.be.eq(8080);
  })

  it('test str arg', () => {
    const argParser = new ArgParser('string');
    argParser.parse('d', '/dev/bin').d.should.be.eq('/dev/bin');
  })

  it('test wrong num arg', () => {
    const argParser = new ArgParser('number');
    (() => argParser.parse('p', 'xxxx')).should.be.throw();
  });
});

describe('test for multi arg', () => {
  let argsParser
  beforeEach(() => {
    const argF = new ArgSchema('f', 'boolean', false);
    const argP = new ArgSchema('p', 'number', 0);
    const argD = new ArgSchema('d', 'string', '');
    const argSchemas = new ArgSchemas(argF, argP, argD);
    argsParser = new ArgsParser(argSchemas);
  })

  it('test empty arg', () => {
    argsParser.parse([]).f.should.be.equal(false);
    argsParser.parse([]).p.should.be.equal(0);
    argsParser.parse([]).d.should.be.equal('');
  });

  it('test multi args', () => {
    const parsedArg = argsParser.parse([['p', '8080'], ['f'], ['d', '/dev/bin']]);
    parsedArg.p.should.be.eq(8080);
    parsedArg.f.should.be.eq(true);
    parsedArg.d.should.be.eq('/dev/bin');
  });

  it('test wrong arg', () => {
    (() => argsParser.parse([['f'], ['x', '666']])).should.be.throw();
  });
})