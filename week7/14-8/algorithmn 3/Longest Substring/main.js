function LongestSubstring(str) {
  let longestCount = 0;
  let strSet = new Set();
  for (let i = 0; i < str.length; i++) {
    if (strSet.has(str[i])) {
      if (longestCount < strSet.size) {
        longestCount = strSet.size;
      }
      strSet.clear();
      strSet.add(str[i]);
    } else if (i == str.length - 1) {
      strSet.add(str[i]);
      if (longestCount < strSet.size) {
        longestCount = strSet.size;
      }
    } else strSet.add(str[i]);
  }
  return longestCount;
}
let result = LongestSubstring("communication");
console.log(result);
