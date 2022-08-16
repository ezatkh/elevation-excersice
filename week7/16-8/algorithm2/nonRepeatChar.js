function firstNonRepeatChar(str) {
  let charToReturn = "";
  let charNotRepeated;
  let charSet = new Set();
  for (let i = 0; i < str.length; i++) {
    if (!charSet.has(str[i])) {
      charToReturn = charNotRepeated;
      charNotRepeated = str[i];
      charSet.add(str[i]);
    } else if (charNotRepeated == str[i] && charSet.has(str[i])) {
      charNotRepeated = "";
    }
  }
  return charToReturn;
}
console.log(firstNonRepeatChar("aabbccdee"));
console.log(firstNonRepeatChar("abca"));
