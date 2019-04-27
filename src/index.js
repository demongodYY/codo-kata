function argsParse(strArgs) {

  const defaultArgs = {
    'f': false,
    'p': 0,
    'd': ''
  }

  function parseSingleArg(strArg) {
    return {
      'flag': strArg.substring(1, 2),
      'value': strArg.substring(3)
    }
  }

  function changeArg(strArg) {
    const flag = parseSingleArg(strArg).flag;
    const value = parseSingleArg(strArg).value;
    if (defaultArgs[flag] === undefined) {
      throw new Error('please input correct args!');
    }
    switch (typeof defaultArgs[flag]) {
      case 'boolean':
        return changeBoolArg(flag);
      case 'number':
        return changeNumArg(flag, value);
      case 'string':
        return changeStrArg(flag, value);
    }
  }

  function changeBoolArg(flag) {
    return defaultArgs[flag] = true;
  }

  function changeNumArg(flag, value) {
    const numFlag = Number(value);
    if (isNaN(numFlag)) {
      throw new Error('please input number type for -p arg');
    }
    return defaultArgs[flag] = numFlag;
  }

  function changeStrArg(flag, value) {
    return defaultArgs[flag] = value
  }

  function changeArgs(strArgs) {
    const pattern = /-[a-zA-Z][ \w\/\\]*/g;
    const arrArgs = strArgs.match(pattern);
    if (arrArgs) {
      arrArgs.forEach(strArg => { changeArg(strArg) });
    }
  }

  changeArgs(strArgs);

  return defaultArgs;
}

export { argsParse }