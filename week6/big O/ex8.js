let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341];

function findIndex(numbers, num) {
  let L = 0;
  let r = numbers.length - 1;
  let middle;

  while (L <= r) {
    middle = (L + r) / 2;
    if (numbers[middle] == num) {
      console.log(middle);
      return;
    } else if (numbers[middle] > num) r = middle - 1;
    else L = middle;
  }
  if (L > r) middle = -1;
  console.log(middle);
}
findIndex(numbers, 33);
