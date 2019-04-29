function argsParse(strArgs) {

  const defaultArgs = {
    'f': false,
    'p': 0,
    'd': ''
  }

  function checkNumArg(value) {
    if (isNaN(value)) {
      throw new Error('-p arg should input number!');
    }
    return true;
  }

  function checkType(flag, type) {
    return typeof defaultArgs[flag] === type;
  }

  function parseSingleArg(strArg) {
    return {
      flag: strArg.substring(1, 2),
      value: strArg.substring(3)
    }
  }

  function getNumArg(parsedArg) {
    const result = {};
    const value = Number(parsedArg.value);
    if (checkType(parsedArg.flag, 'number') && checkNumArg(value)) {
      result[parsedArg.flag] = value;
    }
    return result;
  }

  function getBoolArg(parsedArg) {
    const result = {};
    if (checkType(parsedArg.flag, 'boolean')) {
      result[parsedArg.flag] = true;
    }
    return result;
  }

  function getStrArg(parsedArg) {
    const result = {};
    if (checkType(parsedArg.flag, 'string')) {
      result[parsedArg.flag] = parsedArg.value;
    }
    return result;
  }

  function findErrArg(parsedArg) {
    if (defaultArgs[parsedArg.flag] === undefined) {
      throw new Error('please input correctly args!');
    }
    return {};
  }

  const pattern = /-\w[ \w\/]*/g;
  return strArgs === '' ? defaultArgs : strArgs.match(pattern).reduce((acc, curr) => {
    const parsedArg = parseSingleArg(curr);
    return Object.assign(acc, getStrArg(parsedArg), getBoolArg(parsedArg), getNumArg(parsedArg), findErrArg(parsedArg));
  }, Object.assign({}, defaultArgs));

}

export {
  argsParse
}