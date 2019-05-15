import Utils from './Utils';
import ParsedArg from './ParsedArg';

export default class ArgModel {
  constructor(flag, value) {
    this.flag = flag;
    this.value = value;
    this.parseModel = {
      'string': this.parseStrArg.bind(this),
      'number': this.parseNumArg.bind(this),
      'boolean': this.parseBoolArg.bind(this),
      'strArray': this.parseStrArrayArg.bind(this),
      'numArray': this.parseNumArrayArg.bind(this)
    }
  }
  parseStrArg() {
    return new ParsedArg(this.flag, this.value);
  }

  parseBoolArg() {
    return new ParsedArg(this.flag, true);
  }
  
  parseNumArg() {
    return new ParsedArg(this.flag, Utils.str2Num(this.value));
  }

  parseStrArrayArg() {
    return new ParsedArg(this.flag, [...this.value]);
  }

  parseNumArrayArg() {
    return new ParsedArg(this.flag, this.value.map(strValue => Utils.str2Num(strValue)));
  }

  parse(argType) {
    return this.parseModel[argType]();
  }
}