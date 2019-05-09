import ParsedArg from './ArgParser'

export default class ArgsParser {
  constructor(schemas) {
    this.schemas = schemas;
  }

  getDefaultArgs(schema) {
    return this.schemas.reduce((acc, schema) => {
      acc[schema.flag] = schema.defaultValue;
      return acc;
    }, {});
  }

  parseArg(flag, value) {
    const type = this.schemas.find(schema => schema.flag === flag).type;
    const parsedArg = new ParsedArg(type);
    return parsedArg.parseArg(flag, value)
  }

  parse(args) {
    return args.reduce((acc, arg) => Object.assign(acc, this.parseArg(arg[0], arg[1])),
      this.getDefaultArgs());
  }
}