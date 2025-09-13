function mergeSort(arr, start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    return merge(arr, start, mid, end);
  }
}
function merge(arr, start, mid, end) {
  let tempArr = arr.slice();

  let i = start;
  let j = mid + 1;
  let k = start;

  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      tempArr[k] = arr[i];
      k++;
      i++;
    } else {
      tempArr[k] = arr[j];
      k++;
      j++;
    }
  }

  for (; i <= mid; i++) {
    tempArr[k] = arr[i];
    k++;
  }

  for (; j <= end; j++) {
    tempArr[k] = arr[j];
    k++;
  }

  for (let i = start; i <= end; i++) {
    arr[i] = tempArr[i];
  }

  return arr;
}

let arrayVal = [3, 2, 1, 13, -4, 8, 5, 0, 1];
let startIndx = 0;
let endIndx = arrayVal.length - 1;
console.log(mergeSort(arrayVal, startIndx, endIndx));
