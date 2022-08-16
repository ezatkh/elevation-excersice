function printStarSeries(num, count) {
  if (count == 0) return;
  printStar(1, num, false);
  printStarSeries(num, count - 1);
}
function printStar(length, numberToPrint, reverse) {
  if (!length) return;
  if (length == numberToPrint) reverse = true;
  let star = "";
  for (let i = 0; i < length; i++) star += "*";
  console.log(star);
  if (reverse) printStar(length - 1, numberToPrint, reverse);
  else printStar(length + 1, numberToPrint, reverse);
}

printStarSeries(5, 3);
