const reverse = function (str) {
  return [...str].map((char, index) => str[str.length - 1 - index]).join("");
};

console.log(reverse("dog")); //should return "god"
console.log(reverse("race car")); //should return "rac ecar"
