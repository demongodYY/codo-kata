// function wordMatch(string, word) {
//   if (string.length === 0 || word.length === 0) {
//     return true;
//   }
//   const findIndex = string.indexOf(word[0]);
//   return findIndex >= 0 ? wordMatch(string.substring(0, findIndex).concat(string.substring(findIndex + 1)), word.substring(1)) : false
// }

function stringMatch(string, word1, word2) {
  return string.split('').sort().join('') === word1.concat(word2).split('').sort().join('');
}

function genAllAnagram(sourceData) {
  const result = sourceData.reduce((acc, word1, index) => {
    sourceData.slice(index + 1).forEach(word2 => acc.push(`${word1},${word2}`));
    return acc;
  }, []);
  return result;
}

function filterAnagram(allAnagram, callback) {
  const result =  allAnagram.filter(ele => {
    const arrWord = ele.split(',');
    return callback('documenting', arrWord[0], arrWord[1]);
  })
  console.info(result);
  return result;
}

export {  
  stringMatch,
  genAllAnagram,
  filterAnagram
}