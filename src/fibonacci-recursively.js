function fibsRec(num) {
let n = Number(num);
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arrFib = fibsRec(n - 1);
  console.log(arrFib);
  console.log(`n: ${n}`);
  arrFib.push(arrFib[n - 2] + arrFib[n - 3]);
  return arrFib;
}
console.log(fibsRec(8));

