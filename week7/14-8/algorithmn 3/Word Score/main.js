function highestScore(str) {
  str += " ";
  let maxNum = 0;
  let maxStr = "";
  let counter = 0;
  let maxStrtoReturn = "";
  for (let index = 0; index < str.length; index++) {
    if (index == 0) {
      counter = 0;
    }
    if (str[index] == " ") {
      if (counter > maxNum) {
        maxNum = counter;
        maxStrtoReturn = maxStr;
      }
      maxStr = "";
      counter = 0;
    }
    maxStr += str[index];
    counter += str.charCodeAt(index);
  }

  return maxStrtoReturn;
}
let str = "if you are a winner";
let result = highestScore(str);
console.log(result);
