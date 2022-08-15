function uniqueString(str) {
  let strSet = new Set();
  for (let char of str) {
    if (strSet.has(char)) {
      return false;
    } else {
      strSet.add(char);
    }
  }
  return true;
}
let result = uniqueString("cat");
console.log(result);
