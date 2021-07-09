function selectionSort(arr) {
  // array length minus 1 because for the last itteration the biggest number will be already the last number
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap the values
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

    console.log(`Arr after itteration ${i} is ${arr}`);
  }

  return arr;
}

console.log(`Final result: ${selectionSort([2, 8, 3, 1, 5])}`);
