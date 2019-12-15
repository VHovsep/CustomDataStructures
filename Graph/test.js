const Graph = require("data-graph-nodejs");
const g = new Graph();
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();

console.log("BFS");
g.bfs('A');
console.log("DFS");
g.dfs('A');
