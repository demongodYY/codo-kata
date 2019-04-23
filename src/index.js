function fizz(num) {
  return num % 3 === 0 || num.toString().indexOf('3') > -1 ? 'fizz' : '';
}

function buzz(num) {
  return num % 5 === 0 || num.toString().indexOf('5') > -1 ? 'buzz' : '';
}

function fizzBuzz(num) {
  const strResult = [fizz, buzz].reduce((acc, curr) => acc += curr(num), '');
  return strResult.length > 0 ? strResult : num.toString();
}

export {
  fizz,
  buzz,
  fizzBuzz
}