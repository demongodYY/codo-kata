export default class Anagrams {

  constructor(wordsList) {
    this.originWordsList = wordsList;
  }

  isAnagram(word1,word2) {
    return word1.split('').sort().join('') === word2.split('').sort().join('')
  }

  getFirstWord() {
    return this.originWordsList[0];
  }

  getAnagramArray(compareWord) {
   return this.originWordsList.filter(word => this.isAnagram(word, compareWord));
  }

  filterWordsList(anagramArray) {
    this.originWordsList = this.originWordsList.filter(word => anagramArray.indexOf(word) === -1);
  }

  getAnagrams() {
    const reusult = [];
    while(this.originWordsList.length > 0) {
      const anagramArray = this.getAnagramArray(this.getFirstWord());
      reusult.push(anagramArray);
      this.filterWordsList(anagramArray);
    }
    return reusult.filter(wordArray => wordArray.length > 1);
  }

}

