const fibs = function (num) {
  let n = Number(num);

  let fibonacciValues = [];
  let fn = 0;
  let fnMinusOne = 0;
  let fnMinusTwo = 0;

  nextFn: for (let i = 0; i <= n; i++) {
    if (i < 2) {
      fn = i;
      fibonacciValues.push(fn);
      continue nextFn;
    }

    if (i > 2) {
      for (let j = 1; j <= i; j++) {
        fnMinusOne = fibonacciValues[fibonacciValues.length - 1];
        fnMinusTwo = fibonacciValues[fibonacciValues.length - 2];
        fn = fnMinusOne + fnMinusTwo;
        fibonacciValues.push(fn);

        continue nextFn;
      }
    }
  }
  return fibonacciValues;
};
console.log(`Iterative: ${fibs(8)}`);

function fibsRec(num) {
  let n = Number(num);
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arrFib = fibsRec(n - 1);
  arrFib.push(arrFib[n - 2] + arrFib[n - 3]);
  return arrFib;
}
console.log(`Recursive: ${fibsRec(8)}`);
