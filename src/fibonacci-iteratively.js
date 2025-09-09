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
  console.log(fibonacciValues);
  return fn;
};
fibs(8);
