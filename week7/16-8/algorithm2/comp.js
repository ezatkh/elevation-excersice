function getMaxProfit(arr) {
    if (arr.length == 0) return 0;
    let maxNum = arr[0];
    let minNum = arr[0];
    let maxIndex = 0;
    let minIndex = 0;
    for (let j = 0; j < arr.length; j++) {
      if (maxNum < arr[j]) {
        maxNum = arr[j];
        maxIndex = j;
      }
      if (minNum > arr[j]) {
        minNum = arr[j];
        minIndex = j;
      }
    }
    console.log(minIndex);
    console.log(maxIndex);
    if (minIndex < maxIndex) {
      return maxNum - minNum;
    }
    let arrSet = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (arrSet.has(arr[i])) {
        return 0;
      } else {
        arrSet.add(arr[i]);
      }
    }
    return 1;
  }
  console.log(getMaxProfit([])); //0
  console.log(getMaxProfit([10, 7, 5, 8, 5, 9])); // 4
  console.log(getMaxProfit([200, 150, 180, 300, 10, 150])); //150
  console.log(getMaxProfit([100, 50, 100, 30, 90])); //60
  console.log(getMaxProfit([100, 90, 90, 80, 80])); //0
  console.log(getMaxProfit([100, 90, 80, 60, 50])); //-10
  