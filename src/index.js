export function isPalindromic(str) {
  return str === str.split('').reverse().join('');
}

export function findPalindromicWithlength(str, length) {
  for (let i=0; i+length<=str.length;i++) {
    let result = str.slice(i, i+length); 
    if (isPalindromic(result)) {
      return result;
    } 
  }
  return '';
}

export function findLogestPalindromic(s) {
  let result = '';
  for (let length = s.length; length > 0; length--) {
    result = findPalindromicWithlength(s, length);
    if (result.length > 0) {
      break;
    }
  }
  return result;
}