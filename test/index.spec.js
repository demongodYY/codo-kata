import chai from 'chai';
chai.should();

import Args from '../src/Args'

describe('Canary test', () => {
  it('should be ok', () => {
    (1).should.be.eq(1);
  });
});

describe('Args test', () => {
  let args;
  let testSchema;
  beforeEach(() => {
    testSchema = [
      {flag: 'p', type: 'number',  default: 0},
      {flag: 'd', type: 'string',  default: ''},
      {flag: 'f', type: 'boolean',  default: false},
      {flag: 'l', type: 'numArray',  default: []},
      {flag: 'm', type: 'strArray',  default: []}
    ]
     args = new Args(testSchema);
  });

  it('test create Args with schema', () => {    
    args.schema.length.should.be.eq(testSchema.length)
  });

  it('test parse string arg', () => {
    const parsedArg = args.parseArg(['d', '/dev/bin']);
    parsedArg.d.should.be.eq('/dev/bin');
  });

  it('test parse bool Arg', () => {
    const parsedArg = args.parseArg(['f']);
    parsedArg.f.should.be.eq(true);
  });

  it('test parse number arg', () => {
    const parsedArg = args.parseArg(['p', '8080']);
    parsedArg.p.should.be.eq(8080);
  });

  it('test wrong number arg', () => {
    (() => args.parseArg(['p', 'xxx'])).should.throw();
  });

  it('test string array arg', () => {
    const parsedArg = args.parseArg(['m', ['abc','cba','nba']]);
    parsedArg.m.should.have.members(['abc','cba','nba']);
  });

  it('test string array arg', () => {
    const parsedArg = args.parseArg(['l', [1,2,3]]);
    parsedArg.l.should.have.members([1,2,3]);
  });

  it('test wrong input with num array', () => {
    (() => args.parseArg(['l', ['xxx',2,3]])).should.be.throw();
  });

  it('test wrong input' ,() => {
    (() => args.parseArg(['x', 666])).should.be.throw();
  })

  it('test multi args', () => {
    const parsedArgs = args.parse([['d', '/dev/bin'], ['f'], ['p', '8080']]);
    parsedArgs.d.should.be.eq('/dev/bin');
    parsedArgs.f.should.be.eq(true);
    parsedArgs.p.should.be.eq(8080);
  });
})