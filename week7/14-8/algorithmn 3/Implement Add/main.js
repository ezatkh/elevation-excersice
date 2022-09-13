function add(num1, num2 = 0) {
  return function (num2) {
    let z = num1 + num2;
    return z;
  };
}
let result = add(2, 5); // 7
console.log(result);

result = add(2)(5); // 7
console.log(result);
