function fizzBuzz(num) {

  function comparefizzBuzz(num, compare) {
    return num % compare === 0 || num.toString().indexOf(compare.toString()) > -1;
  }

  function fizz(num) {
    return comparefizzBuzz(num, 3);
  }

  function buzz(num) {
    return comparefizzBuzz(num, 5);
  }


  return fizz(num) && buzz(num) ? 'fizzbuzz' : fizz(num) ? 'fizz' : buzz(num) ? 'buzz' : num.toString();
}

export {
  fizzBuzz
}