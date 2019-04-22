function fizz(num, resultStream) {
  return num % 3 === 0 || num.toString().indexOf('3') > -1 ? resultStream + 'Fizz' : resultStream;
}

function buzz(num, resultStream) {
  return num % 5 === 0 || num.toString().indexOf('5') > -1 ? resultStream + 'Buzz' : resultStream;
}

function trNum(num, resultStream) {
  return resultStream.length > 0 ? resultStream : num.toString();
}

function fizzBuzz(num) {
  return trNum(num, buzz(num, fizz(num, '')));
}

export {
  fizz,
  buzz,
  trNum,
  fizzBuzz
}