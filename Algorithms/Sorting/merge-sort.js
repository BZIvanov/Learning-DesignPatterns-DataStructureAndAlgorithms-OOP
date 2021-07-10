const merge = (leftArr, rightArr) => {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    const leftArrEl = leftArr[leftIdx];
    const rightArrEl = rightArr[rightIdx];

    if (leftArrEl < rightArrEl) {
      result.push(leftArrEl);
      leftIdx++;
    } else {
      result.push(rightArrEl);
      rightIdx++;
    }
  }

  // concat the result with the array with remaining elements left (the bigger array)
  return [...result, ...leftArr.slice(leftIdx), ...rightArr.slice(rightIdx)];
};

const mergeSort = (arr) => {
  // no sorting required for empty or array with 1 element
  if (arr.length <= 1) {
    return arr;
  }

  const middleIdx = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIdx);
  const rightArr = arr.slice(middleIdx);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort([2, 8, 7, 4, 3, 1, 5]));
