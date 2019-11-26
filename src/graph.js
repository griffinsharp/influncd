import * as d3 from 'd3';

    // notes as I learn d3...

function graph () {
    // svg container, set width and height of container (with extra space of 50px)
    // dimensions of graph
    const dims = { height: 300, width: 300, radius: 150 };

    // ANGLE GENERATOR
        // center of graph, with space for border
    const cent = { x: (dims.width / 2 + 5), y: (dims.height / 2 + 5) };
    const svg = d3.select("div.graph-container")
        .append('svg')
        .attr('width', dims.width + 50)
        .attr('height', dims.height + 50);

    // adding a group, which has all graph elements that we will append to svg
    // translate to the center of the svg container
    const graph = svg.append('g')
    .attr('transform', `translate(${cent.x}, ${cent.y})`);

    // pie generator for slices 
    // returns a function which will generate the angles for our slices
    // don't re-sort data (null)
    // takes in our data and determines how big each slice should be automatically
    const pie = d3.pie()
        .sort(null)
        .value(data => data.cost);

    // ARC GENERATOR
        // arc generator created path "d" attribute we can use to make d3 paths
        // need to tell d3 how long to make our slices
    const arcPath = d3.arc()
    .outerRadius(dims.radius);

    // Listener on firebase collection
    
}

export default graph;
