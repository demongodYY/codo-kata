export default class ParsedArg extends Object {
  constructor(flag, value){
    super();
    this[flag] = value;
  }
}