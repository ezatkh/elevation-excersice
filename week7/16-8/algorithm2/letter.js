const rawDist = {
  A: 60,
  B: 10,
  C: 10,
  D: 20,
};
function getLetter() {
  let randomLetter = Math.floor(Math.random() * 100);
  let count = 0;
  for (let element of Object.keys(rawDist)) {
    count += rawDist[element];
    if (randomLetter <= count) return element;
  }
}
console.log(getLetter());
