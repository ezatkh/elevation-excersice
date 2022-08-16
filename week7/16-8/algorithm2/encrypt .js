function encrypt(str) {
  let strEncrypted = "";
  let codeFormat;
  let charFormat;
  for (let i = 0; i < str.length; i++) {
    codeFormat = str.charCodeAt(i) + 1;
    charFormat = String.fromCharCode(codeFormat);

    strEncrypted += charFormat;
  }
  return strEncrypted;
}
console.log(encrypt("cat"));
