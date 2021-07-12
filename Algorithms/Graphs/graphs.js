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
