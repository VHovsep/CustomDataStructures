const Queue = require("queue-nodejs");

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        let get_keys = this.AdjList.keys();
        for (let i of get_keys) {
            let get_values = this.AdjList.get(i);
            let conc = "";
            for (let j of get_values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }

    bfs(startingNode) {
        let visited = [];
        for (let i = 0; i < this.noOfVertices; i++)
            visited[i] = false;
        let q = new Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);
        while (!q.isEmpty()) {
            let getQueueElement = q.dequeue();
            console.log(getQueueElement);
            let get_List = this.AdjList.get(getQueueElement);
            for (let i in get_List) {
                let neigh = get_List[i];
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }

    dfs(startingNode) {
        let visited = [];
        for (let i = 0; i < this.noOfVertices; i++)
            visited[i] = false;
        this.DFSUtil(startingNode, visited);
    }

    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log(vert);
        let get_neighbours = this.AdjList.get(vert);
        for (let i in get_neighbours) {
            let get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }
}

module.exports = Graph;
