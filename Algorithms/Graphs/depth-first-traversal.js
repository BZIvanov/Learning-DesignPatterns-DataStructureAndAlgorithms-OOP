const directedGraph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b'],
  f: ['d'],
};

const depthFirstTraversal = (graph, startNode) => {
  const stack = [startNode];

  while (stack.length) {
    let text = `Stack: ${stack}`;

    const currentNode = stack.pop();

    text += ` | Current node: ${currentNode}`;

    for (const neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }

    text += ` | Neighbors: ${graph[currentNode]}`;
    console.log(text);
  }
};

depthFirstTraversal(directedGraph, 'a');

const depthFirstTraversalRecursive = (graph, startNode) => {
  console.log('Recursive', startNode);

  for (const neighbor of graph[startNode]) {
    depthFirstTraversalRecursive(graph, neighbor);
  }
};

depthFirstTraversalRecursive(directedGraph, 'a');
