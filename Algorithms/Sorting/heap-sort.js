function heapify(arr, length, parentIndex) {
  let largest = parentIndex;
  const left = parentIndex * 2 + 1;
  const right = left + 1;

  // left child
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }
  // right child
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== parentIndex) {
    [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];

    heapify(arr, length, largest);
  }
}

function heapSort(arr) {
  let lastParentNodeIndex = Math.floor(arr.length / 2 - 1);
  let lastNodeIndex = arr.length - 1;

  while (lastParentNodeIndex >= 0) {
    heapify(arr, arr.length, lastParentNodeIndex);
    lastParentNodeIndex--;
  }

  while (lastNodeIndex >= 0) {
    [arr[0], arr[lastNodeIndex]] = [arr[lastNodeIndex], arr[0]];
    heapify(arr, lastNodeIndex, 0);
    lastNodeIndex--;
  }

  return arr;
}

console.log(heapSort([2, 8, 5, 3, 9, 1, 4]));
