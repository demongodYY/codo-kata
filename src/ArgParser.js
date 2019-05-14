class ParsedBoolArg extends Object{
  constructor(flag) {
    super();
    this[flag] = true;
  }
}

class ParsedNumArg extends Object{
  constructor(flag, value) {
    super();
    const numValue = Number(value);
    if (isNaN(numValue)) throw new Error('please input correctly number');
    this[flag] = numValue;
  }
}

class ParsedStrArg extends Object {
  constructor(flag, value) {
    super();
    this[flag] = value;
  }
}

class ParseModels extends Object {
  constructor() {
    super();
    this.boolean = ParsedBoolArg;
    this.number = ParsedNumArg;
    this.string = ParsedStrArg
  }
}

export default class ArgParser {
  constructor(type) {
    this.type = type;
    this.parseModels = new ParseModels()
  }

  getParsedArgModel(type) {
    return this.parseModels[type];
  }

  parse(flag, value) {
    const ParsedArg = this.getParsedArgModel(this.type);
    return new ParsedArg(flag, value);
  }
}