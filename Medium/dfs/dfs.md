# DFS

### Problem

https://www.greatfrontend.com/questions/javascript/depth-first-search

#

### Problem Description

Write a function that implements the depth-first search algorithm on a directed graph (in adjacency list format), given a starting node.


### Examples

```
const graph1 = {
  A: ['B', 'C', 'D'],
  B: ['E', 'F'],
  C: ['G', 'H'],
  D: ['I', 'J'],
  E: ['D'],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
};
depthFirstSearch(graph1, 'A'); // ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']
depthFirstSearch(graph1, 'B'); // ['B', 'E', 'D', 'I', 'J', 'F']

const graph2 = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F', 'G'],
  'D': [],
  'E': [],
  'F': [],
  'G': [],
};
depthFirstSearch(graph2, 'A')); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
depthFirstSearch(graph2, 'E')); // ['E']

```

#

### Recap (Hint)

Depth-first search (DFS) is an algorithm used for traversing a graph or a tree. The output from DFS is an array of the graph's nodes in the order they were traversed. This output is useful for a variety of different use cases and purposes, which makes DFS a useful algorithm to know. Some use cases:

1. Find a specific node or group of nodes. This is common in front end to find specific DOM node(s) within the DOM tree.
2. Checking if a graph is connected.
3. Finding a path between two nodes in a graph.
4. Generating a topological sort of a directed acyclic graph (DAG).
5. Identifying cycles in a graph.
6. As a building block for other algorithms.

Here is an overview of how DFS works to traverse a graph, using the standard implementation that takes in an adjacency list (we use an array instead) and the root node:

1. Initialize an array or a stack to store nodes to be visited. Push root node.
2. Initialize a set to track visited nodes.
3. Enter a loop that continues until the stack is empty. In each iteration of the loop:
   1. Pop the top node from the array / stack.
   2. Retrieve the neighbors of the node from the input graph.
   3. For each neighbor, check if it has been visited. If it has not been visited, add it to the set of nodes to be visited.
4. Return the set of visited nodes.

#

### Solution

[DFS](./dfs.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
