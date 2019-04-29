function argsParse(strArgs) {
  const defaultArgs = {
    'f': false,
    'p': 0,
    'd': ''
  }
  return parseStrArgs(strArgs).reduce((acc, curr) => Object.assign({}, acc, parseArg(defaultArgs, curr)), defaultArgs);
}

function parseArg(defaultArg, input) {
  defaultArg = checkErrorArg(defaultArg, input);
  switch (typeof defaultArg[parseArgFormat(input)[0]]) {
    case 'number':
      return parseNumArg(input);
    case 'boolean':
      return parseBoolArg(input);
    case 'string':
      return parseStrArg(input);
  }
}

function parseStrArgs(input) {
  const pattarn = /-\w *[\w\/]*/g;
  return input.match(pattarn) || [];
}

function parseArgFormat(input) {
  return [input.substring(1, 2), input.substring(3)];
}

function formatReturnArg(flag, value) {
  const result = {};
  result[flag] = value;
  return result;
}

function parseStrArg(input) {
  return formatReturnArg(parseArgFormat(input)[0], parseArgFormat(input)[1]);
}

function parseBoolArg(input) {
  return formatReturnArg(parseArgFormat(input)[0], true);
}

function getNumber(value) {
  if (isNaN(Number(value))) {
    throw new Error('should be input correct num for -p');
  }
  return Number(value);
}

function parseNumArg(input) {
  return formatReturnArg(parseArgFormat(input)[0], getNumber(parseArgFormat(input)[1]));
}

function checkErrorArg(defaultArg, input) {
  if (defaultArg[parseArgFormat(input)[0]] === undefined) {
    throw new Error(`There is no ${parseArgFormat(input)[0]} arg!`);
  }
  return defaultArg;
}

export {
  argsParse,
  parseStrArg,
  parseBoolArg,
  parseNumArg,
  parseStrArgs,
  checkErrorArg
}