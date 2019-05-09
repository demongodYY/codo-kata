class ParsedBoolArg {
  constructor(flag) {
    this[flag] = true;
  }
}

class ParsedNumArg {
  constructor(flag, value) {
    const numValue = Number(value);
    if (isNaN(numValue)) throw new Error('please input correctly number');
    this[flag] = numValue;
  }
}

class ParsedStrArg {
  constructor(flag, value) {
    this[flag] = value;
  }
}

export default class ArgParser {
  constructor(type) {
    this.boolean = ParsedBoolArg;
    this.number = ParsedNumArg;
    this.string = ParsedStrArg;
    this.parseModel = this[type];
  }

  parseArg(flag, value) {
    return new this.parseModel(flag, value);
  }
}
