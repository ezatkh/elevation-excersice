const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
  let jumbledArr = [];
  let randomArr1;
  let randomArr2;
  while (arr1.length || arr2.length) {
    randomArr1 = Math.floor(Math.random() * arr1.length);
    randomArr2 = Math.floor(Math.random() * arr2.length);
    if (arr1.length) {
      jumbledArr.push(arr1[randomArr1]);
      arr1.splice(randomArr1, 1);
    }
    if (arr2.length) {
      jumbledArr.push(arr2[randomArr2]);
      arr2.splice(randomArr2, 1);
    }
  }

  return jumbledArr;
};

console.log(jumble(colors, foods));
// could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]
