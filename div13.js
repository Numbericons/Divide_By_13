function thirt(n) {
  const remainders = [1, 10, 9, 12, 3, 4];
  const num = n.toString();
  let remIdx = 0;
  let sum = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    sum += parseInt(num[i]) * remainders[remIdx % 6];
    remIdx += 1;
  }

  return (sum === n) ? sum : thirt(sum);
}

let result = thirt(8529);
console.log(result);