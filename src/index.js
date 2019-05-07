class ArgParser {
  constructor(schema) {
    this.schema = schema;
    this.parseMethods = {
      'number': this.parseNumArg,
      'string': this.parseStrArg,
      'boolean': this.parseBoolArg,
      'numberArray': this.parseNumArrayArg,
      'strArray': this.parseStrArray
    }
  }

  getdefaultArg() {
    const result = {};
    this.schema.forEach((item) => {
      result[item.flag] = item.default;
    });
    return result;
  }

  transPortNum(strNum) {
    if (isNaN(parseInt(strNum))) throw new Error('should input correct num');
    return parseInt(strNum);
  }

  parseStrArray(flag, value) {
    const result = {};
    result[flag] = value.split(',');
    return result;
  }

  parseNumArrayArg(flag, value) {
    const result = {};
    result[flag] = value.split(',').map(num => this.transPortNum(num));
    return result;
  }

  parseNumArg(flag, value) {
    const result = {};
    result[flag] = this.transPortNum(value);
    return result;
  }

  parseStrArg(flag, value) {
    const result = {};
    result[flag] = value;
    return result;
  }

  parseBoolArg(flag) {
    const result = {};
    result[flag] = true;
    return result;
  }

  parseArg(arg) {
    const type = this.schema.find((item) => item.flag === arg[0]).type;
    return this.parseMethods[type].bind(this)(arg[0], arg[1]);
  }

  parseArgs(args) {
    const result = Object.assign({}, this.getdefaultArg());
    args.forEach((arg) => {
      Object.assign(result, this.parseArg(arg));
    })
    return result;
  }
}

export {
  ArgParser
}