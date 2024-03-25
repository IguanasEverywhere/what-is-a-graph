class Graph {
  constructor(paths) {
    this.graph = {};

    for (let i = 0; i < paths.length; i++) {
      for (let j = 0; j < paths[i].length; j++) {
        let key = paths[i][j];
        if (!this.graph[key]) {
          this.graph[key] = new Set();
        }
        if (paths[i][j + 1]) {
          this.graph[key].add(paths[i][j + 1]);
        }
        if (paths[i][j - 1]) {
          this.graph[key].add(paths[i][j - 1]);
        }
      }
    }
  }

  isAdjacent(vertexA, vertexB) {
    return this.graph[vertexA].has(vertexB);

  }

  // array is an adjacency list
  addVertex(vertex, array) {
    this.graph[vertex] = new Set();
    for (let v of array) {
      if (this.graph[v]) {
        this.graph[v].add(vertex);
      } else {
        this.graph[v] = new Set(vertex);
      }
      this.graph[vertex].add(v);
    }
  }
}

if (require.main === module) {
  // add your own tests in here
  let graph = new Graph([]);

  console.log("Expecting: {}");
  console.log(graph.graph);

  console.log("");

  graph = new Graph([["a", "b", "c"], ["b", "d"]]);

  console.log('Expecting: { a: { "b" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b" }}');
  console.log(graph.graph);

  console.log("");

  console.log("Expecting: true");
  console.log(graph.isAdjacent("a", "b"));

  console.log("");

  console.log("Expecting: false");
  console.log(graph.isAdjacent("a", "c"));

  console.log("");

  graph.addVertex("e", ["a", "d"]);
  console.log('Expecting: { a: { "b", "e" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b", "e" }, e: { "a", "d" } }');
  console.log(graph.graph);

  console.log("")
}

module.exports = Graph;

// Please add your pseudocode to this file
// And a written explanation of your solution
