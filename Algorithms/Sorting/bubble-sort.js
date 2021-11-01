function bubbleSort(arr) {
  const copy = [...arr];

  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = 0; j < copy.length - 1 - i; j++) {
      if (copy[j] > copy[j + 1]) {
        console.log(i, j);
        console.log(copy);

        // swap positions
        [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
      }
    }
  }

  return copy;
}

console.log(bubbleSort([2, 8, 11, -23, 45.2, 9, 3]));
