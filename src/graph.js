import * as d3 from "d3";

// dimensions of graph
const dims = { height: 300, width: 300, radius: 150 }; 
// center of graph, with space for border
const cent = { x: (dims.width/2 + 5), y: (dims.height/2 + 5) };

// svg container
const svg = d3.select();