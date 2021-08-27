const directedGraph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b'],
  f: ['d'],
};

console.log('Directed Graph: ', directedGraph);

const undirectedGraph = {
  a: ['b', 'c'],
  b: ['a', 'd', 'e'],
  c: ['a', 'e'],
  d: ['b', 'f'],
  e: ['b', 'c'],
  f: ['d'],
};

console.log('Undirected Graph: ', undirectedGraph);
