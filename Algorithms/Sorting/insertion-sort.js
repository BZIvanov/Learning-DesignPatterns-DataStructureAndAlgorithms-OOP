function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;

    console.log(`Arr after itteration ${i} is ${arr}`);
  }

  return arr;
}

console.log(`Final result: ${insertionSort([2, 8, 3, 1, 5])}`);
