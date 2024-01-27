//Recursive Merge Sort

const mergeSort = (start, arr, end) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(start, arr, mid);
    mergeSort(mid + 1, arr, end);
    return merge(arr, start, mid, end);
  }
};

const merge = (arr, start, mid, end) => {
  const temp = [];

  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= end) {
    temp.push(arr[j]);
    j++;
  }

  for (let i = start; i <= end; i++) {
    arr[i] = temp[i - start];
  }

  return arr;
};

const array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const array2 = [105, 79, 100, 110];

console.log("Array 1 Sorted : ", mergeSort(0, array1, array1.length - 1)); //The output : [0, 1, 1, 2, 3, 5, 8, 13]
console.log("Array 2 Sorted : ", mergeSort(0, array2, array2.length - 1)); //The output : [79, 100, 105, 110]
