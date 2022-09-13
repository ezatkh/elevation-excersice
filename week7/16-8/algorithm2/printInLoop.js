function printInLoopF(words) {
  for (let index = 0; ; index++) {
    index = index % words.length;
    console.log(words[index]);
  }
}
let printInLoop = ["down", "the", "rabbit", "hole"];
console.log(printInLoopF(printInLoop));
