const findDuplicates = function (ages) {
  let hash1 = new Set();
  let hash2 = new Set();
  for (let index of ages) {
    if (hash1.has(index)) {
      hash2.add(index);
      console.log(`${index} has a duplicate`);
    } else {
      hash1.add(index);
    }
  }
};
findDuplicates([1, 1, 5, 2, 33, 4, 5, 3, 5]);
