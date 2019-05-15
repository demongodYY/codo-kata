import Schema from './Schema';
import ArgModel from './ArgModel';

export default class Args {
  constructor(schema) {
    this.schema = new Schema(schema);
  }

  parseArg(arg) {
    const argType = this.schema.find(singleSchema => singleSchema.flag === arg[0]).type;
    const argModel = new ArgModel(arg[0], arg[1]);
    return argModel.parse(argType);
  }

  parse(args) {
    return args.reduce((acc, curr) => Object.assign(acc, this.parseArg(curr)), {});
  }
}
