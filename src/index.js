export function getReverseStr(str) {
  return str.split('').reverse().join('');
}

export function findPalindromicSubString(str, reverseStr, width) {
  if(str.length<width) {
    return '';
  }
  return str.slice(0, width) === reverseStr.slice(reverseStr.length - width) ?
    str.slice(0, width)
    : findPalindromicSubString(str.slice(1), reverseStr.slice(0, reverseStr.length - 1), width)
}

export function getLogestPalindromic(s) {
  let width = s.length;
  let result = '';
  const reverseStr = getReverseStr(s);
  while (width > 0) {
    result = findPalindromicSubString(s, reverseStr, width);
    if (result.length > 1) {
      break;
    }
    width--;
  }
  return result;
}