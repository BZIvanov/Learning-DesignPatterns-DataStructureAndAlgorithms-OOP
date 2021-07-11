function binarySearch(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);

    console.log(leftIdx, midIdx, rightIdx);
    console.log(arr.slice(leftIdx, rightIdx + 1));
    console.log('-------------------------------');

    if (target === arr[midIdx]) {
      return midIdx;
    } else if (target < arr[midIdx]) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }

  // target was not found in the array
  return false;
}

console.log(binarySearch([1, 3, 4, 5, 9, 23, 48, 51, 59, 83, 91], 9));
