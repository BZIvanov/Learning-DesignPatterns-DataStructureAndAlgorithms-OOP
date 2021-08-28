const directedGraph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b'],
  f: ['d'],
};

const breadthFirstTraversal = (graph, startNode) => {
  const queue = [startNode];

  while (queue.length) {
    let text = `Queue: ${queue}`;

    const currentNode = queue.shift();

    text += ` | Current node: ${currentNode}`;

    for (const neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }

    text += ` | Neighbors: ${graph[currentNode]}`;
    console.log(text);
  }
};
breadthFirstTraversal(directedGraph, 'a');
