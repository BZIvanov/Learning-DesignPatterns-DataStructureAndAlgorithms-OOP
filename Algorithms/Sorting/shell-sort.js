function shellSort(arr, gaps) {
  if (arr.length < 2) {
    return arr;
  }

  for (const gap of gaps) {
    console.log('Gap: ', gap);
    for (let i = gap; i < arr.length; i++) {
      console.log('I loop: ', i);
      const targetValue = arr[i];
      console.log('Target: ', targetValue);

      let j;
      for (j = i; j >= gap && arr[j - gap] > targetValue; j -= gap) {
        console.log('J loop: ', j);
        arr[j] = arr[j - gap];
      }
      arr[j] = targetValue;
      console.log('Arr: ', arr);
    }
    console.log('-----------');
  }

  return arr;
}

console.log(shellSort([2, 57, 32, -12, 88, 1, -25.22], [701, 10, 54, 2, 1]));
