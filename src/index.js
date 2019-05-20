export default class Anagrams {
  constructor(wordsList) {
    this.originWordsList = wordsList;
  }

  getWordFlag(word) {
    return word.split('').sort().join('');
  }

  pushWordToClassify(wordClassify, word) {
    return (wordClassify || []).concat(word);
  }

  getClassifyWords() {
    return this.originWordsList.reduce((acc, curr) => {
      acc[this.getWordFlag(curr)] = this.pushWordToClassify(acc[this.getWordFlag(curr)], curr)
      return acc;
    }, {});
  }

  getAnagrams() {
    return Object.values(this.getClassifyWords()).filter(arrayWords => arrayWords.length > 1);
  }
}