export default class Utils {
  static str2Num(strValue) {
    const result = Number(strValue);
    if (isNaN(result)) throw new Error('please input correct number');
    return result;
  }
}