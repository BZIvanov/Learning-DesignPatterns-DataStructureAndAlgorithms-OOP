const quickSort = (arr) => {
  console.log('Incoming', arr);
  if (arr.length <= 1) {
    return arr;
  }

  const smallers = [];
  const biggers = [];
  const pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      smallers.push(arr[i]);
    } else {
      biggers.push(arr[i]);
    }
  }

  const result = [...quickSort(smallers), pivot, ...quickSort(biggers)];
  console.log('----->', result);
  return result;
};

console.log(quickSort([2, 8, 7, 4, 3, 1, 5]));
