// OPTION 1 - setup the connections with arrays with nodes paired
console.log('---NODES AS PAIRS---');
const nodes = ['A', 'B', 'C', 'D', 'E'];
const edges = [
  ['A', 'B'],
  ['A', 'D'],
  ['B', 'C'],
  ['C', 'D'],
  ['C', 'E'],
  ['D', 'E'],
];
console.log('Nodes: ', nodes);
console.log('Edges: ', edges);

function findAdjacentNodes(node) {
  const adjacentNodes = [];

  for (const edge of edges) {
    const idx = edge.indexOf(node);
    if (idx > -1) {
      const adjacentNode = idx === 0 ? edge[1] : edge[0];
      adjacentNodes.push(adjacentNode);
    }
  }

  return adjacentNodes;
}
console.log('Adjacent nodes of A: ', findAdjacentNodes('A'));

function isConnected(firstNode, secondNode) {
  return edges.some(
    (edge) => edge.indexOf(firstNode) > -1 && edge.indexOf(secondNode) > -1
  );
}
console.log('Is B connected with C: ', isConnected('B', 'C'));

// OPTION 2 - setup the connections describing the edges as 1-connected, 0-not connected
console.log('---NODES AS MATRIX---');
const vertices = ['A', 'B', 'C', 'D', 'E'];
// each element in each array is a node.
// for example the first array is for 'A', second array for 'B' etc...
// the first element in each array is for 'A', second for 'B' etc...
// that is why first array, first element is 0, because we say that 'A' is not connected to itself, same for the other arrays
const adjacentMatrix = [
  [0, 1, 0, 1, 0], // A [A, B, C, D, E]
  [1, 0, 1, 0, 0], // B [A, B, C, D, E]
  [0, 1, 0, 1, 1], // C [A, B, C, D, E]
  [1, 0, 1, 0, 1], // D [A, B, C, D, E]
  [0, 0, 1, 1, 0], // E [A, B, C, D, E]
];
console.log('Nodes: ', vertices);
console.log('Edges: ', adjacentMatrix);

function findAdjacentNodes2(node) {
  const rowIdx = vertices.indexOf(node);
  return adjacentMatrix[rowIdx]
    .map((n, idx) => (n === 1 ? vertices[idx] : n))
    .filter((n) => n !== 0);
}
console.log('Adjacent nodes of A: ', findAdjacentNodes2('A'));

function isConnected2(firstNode, secondNode) {
  const rowIdx = vertices.indexOf(firstNode);
  const colIdx = vertices.indexOf(secondNode);
  return adjacentMatrix[rowIdx][colIdx] === 1;
}
console.log('Is B connected with C: ', isConnected2('B', 'C'));
