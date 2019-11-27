import * as d3 from 'd3';
import axios from 'axios';

    // notes as I learn d3...

function graph () {
    // svg container, set width and height of container (with extra space of 50px)
    // dimensions of graph
    const dims = { height: 1000, width: 1000, radius: 500 };

    // ANGLE GENERATOR
        // center of graph, with space for border
    const cent = { x: (dims.width / 2 + 5), y: (dims.height / 2 + 5) };
    const svg = d3.select("div.graph-container")
        .append('svg')
        .attr('width', dims.width + 50)
        .attr('height', dims.height + 50);

    // adding a group, which has all graph elements that we will append to svg
    // translate to the center of the svg container

    const defs = svg.append('defs')

    const graph = svg.append('g')
    .attr('transform', `translate(${cent.x}, ${cent.y})`);

    

    // pie generator for slices 
    // returns a function which will generate the angles for our slices
    // don't re-sort data (null)
    // takes in our data and determines how big each slice should be automatically
    const pie = d3.pie()
        .sort(null)
        .value(data => data.influence);

    // ARC GENERATOR
        // arc generator created path "d" attribute we can use to make d3 paths
        // need to tell d3 how long to make our slices
    const arcPath = d3.arc()
    .outerRadius(dims.radius)
    .innerRadius(0);
    
    // UDPATE FUNCTION - where I want to draw paths.
    // will be called everytime our data changes
    // d is passed into arcPath to generate the path for every slice based on data



    const getImg = function(imgPath) {
    
       return storage.refFromURL(`${imgPath}`).getDownloadURL().then( function (url) {
            return axios.get(url)
            .then(res =>  res.config.url);
        })
        
    };

    const update = data => {

        data.forEach(artist => {
            let art = artist;
            getImg(artist.image).then(url => {
                const paths = graph.selectAll('path')
                    .data(pie(data));

                let pattern = defs.append('pattern')
                    .attr('id', url)
                    .attr('x', 0)
                    .attr('y', 0)
                    .attr('width', 1)
                    .attr('height', 1)
                    // .attr('patternUnits', 'userSpaceOnUse')

                let image = pattern.append('svg:image')
                    .attr('xlink:href', d => url)
                    .attr("class", "artist")
                
                let nodeEnter = paths.enter()
                    .append('path')
                    .attr("id", function(d) {return d.data.id;});
                   
                graph.selectAll(`#${art.id}`)
                    .attr('fill', `url(#${url})`)
                    .attr('class', 'arc')
                    .attr('d', arcPath)
                    .attr('stroke', '#ffffff')
                    .attr('stroke-width', 3);
                
            });

        })
    
        
           
    };  



    // DATA ARRAY AND FIRESTONE
    // Listener on firebase collection:
        // - onShapshot real-time listener on db collection to tell when it changes
        // - Cycling through each change
        // - Each change gets a doc object
        // - Each contain data of the change, and randomly generated document id
        // - If change type is added, add (push) to array of data.
        // - If its removed, remove. if updated, update.
        // - All will be added originally, and will auto update accordingly.
        // - For removed, .filter will check every item in the array, and will
        // return a new array with everu item that passes the test function.

    let data = [];
    db.collection('musicians').onSnapshot(res => {
        res.docChanges().forEach(change => {
            const doc = {...change.doc.data(), id: change.doc.id};

            switch (change.type) {
                case 'added':
                    data.push(doc);
                    break;
                case 'modified':
                    const index = data.findIndex(item => item.id == doc.id);
                    data[index] = doc;
                    break;
                case 'removed':
                    data = data.filter(item => item.id !== doc.id);
                    break;
                default:
                    break;    
            }    

        });
        
        update(data);

    });

}

export default graph;
