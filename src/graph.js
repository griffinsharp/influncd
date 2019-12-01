import * as d3 from 'd3';
import d3Tip from "d3-tip";
import axios from 'axios';
import { strict } from 'assert';
import { async } from 'q';

    // notes as I learn d3...

function graph () {
    // svg container, set width and height of container (with extra space of 50px)
    // dimensions of graph
    const dims = { height: 600, width: 600, radius: 300 };

    // ANGLE GENERATOR
        // center of graph, with space for border
    const cent = { x: (dims.width / 2 + 5), y: (dims.height / 2 + 5) };
    const svg = d3.select("div.graph-container")
        .append('svg')
        .attr('width', dims.width + 50)
        .attr('height', dims.height + 50)
        .attr('class', 'circle-svg');

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


    // tip generator - have access to library
    const tip = d3Tip()
    .attr('class', 'tip card')
    .html(d => {
        let artistName = d.data.artist.includes("_") ? d.data.artist.split("_").join(" ") : d.data.artist;
        let percentInfluence = (d.data.percentinfluence).toFixed(4);
        let content = `<div class="name">${artistName}</div>`;
        content += `<div class="influence">${percentInfluence}%</div>`
        return content;
    });

    graph.call(tip);
    
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
                    // can use this for repeating patterns --> .attr('patternUnits', 'userSpaceOnUse')

                let image = pattern.append('svg:image')
                    .attr('xlink:href', d => url)
                    .attr("class", "artist")
                
                let nodeEnter = paths.enter()
                    .append('path')
                    .attr("id", function(d) {return d.data.id;})
                    .each(function(d){ this._current = d; });
                   
                let render = graph.selectAll(`#${art.id}`)
                    .attr('fill', `url(#${url})`)
                    .attr('class', 'arc')
                    // no longer need bc of our Tween for arcEnter 
                    // .attr('d', arcPath)
                    .attr('stroke', '#fafafa')
                    .attr('stroke-width', 3)
                    .transition().duration(7000)
                    .attrTween("d", arcTweenEnter);
            let prevEnd;
            let trigger = 'true';
                graph.selectAll('path')
                    .on('click', function (d, i, n) {
                        
                        let node = d3.select(n[i]);
                        let nextNode = n[i+1]
                       if (trigger === 'true') {
                           trigger = 'false';
                           let that = this;
                           this.parentNode.appendChild(this);
                           d3.select(n[i])
                               .transition().duration(10000)
                               .attrTween("d", (d) => {


                                   let i = d3.interpolate(d.endAngle, d.endAngle + 6.25);
                                   prevEnd = d.endAngle;
                                   console.log(d.endAngle)
                                   console.log(d.startAngle)
                                   return function (t) {
                                       d.endAngle = i(t);
                                       return arcPath(d);
                                   };
                               });
                           // Create div, set contents to artist name.

                           setTimeout(() => {
                               let nameDiv = document.createElement('div');
                               nameDiv.className = 'name-box';
                               let artistName = d.data.artist.includes("_") ? d.data.artist.split("_").join(" ") : d.data.artist;
                               nameDiv.innerHTML = `${artistName}`;
                               document.querySelector("div.graph-container")
                                   .append(nameDiv);

                               // Create div, fetch bio from Wikipedia API, set contents to response.
                               let textBoxDiv = document.createElement('div');
                               textBoxDiv.className = 'text-box';

                               // Dynamically create the API endpoint for each artist.
                               let artistUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${d.data.artist}`;

                               // Specify axios request formatting (get, to artist url, response in json)
                               // Specify how to handle response once promise resolves.

                               axios({
                                   method: 'get',
                                   url: artistUrl,
                                   responseType: 'json'

                               }).then((response) => {
                                   if (response.data.extract.length > 678) {
                                       textBoxDiv.innerHTML = `${response.data.extract.substring(0, 678)}... ` + `<a class="bio-link" target="_blank" href=https://en.wikipedia.org/wiki/${d.data.artist}> Read More</a>`;
                                   } else {
                                       textBoxDiv.innerHTML = `${response.data.extract} ` + `<a class="bio-link" target="_blank" href=https://en.wikipedia.org/wiki/${d.data.artist}> Read More</a>`;
                                   }
                                   

                                });

                               // Append this text box in the graph container below the artist's name
                               document.querySelector("div.graph-container")
                                   .append(textBoxDiv);

                               // Making remove button
                               let removeDiv = document.createElement('div');
                               removeDiv.className = 'remove-box';

                               removeDiv.innerHTML = `I'm done here. Take me back!`;
                               document.querySelector("div.graph-container").append(removeDiv);

                               let el = document.querySelector('div.remove-box');

                               // Handling removal of text-box, name-box, and remove-box itself.
                               el.addEventListener("click", function () {
                                   document.querySelector("div.text-box").classList.add("fade-out");
                                   document.querySelector("div.name-box").classList.add("fade-out");
                                   document.querySelector('div.remove-box').classList.add("fade-out");
                                   setTimeout( () => {
                                       document.querySelector("div.text-box").remove();
                                       document.querySelector("div.name-box").remove();
                                       document.querySelector('div.remove-box').remove();
                                       trigger = 'true';}, 1000 );
                                   
                
                   
                                   node.transition().duration(20000)
                                       .attrTween("d", (d) => {
                                           console.log(d.endAngle)
                                           console.log(d.startAngle)
                                           let i = d3.interpolate(d.endAngle, prevEnd);
                                           return function (t) {
                                               d.endAngle = i(t);
                                               console.log(d.endAngle)
                                               console.log(d.startAngle)
                                               return arcPath(d);
                                               
                                           };
                                        
                                           
                                       });
                                   setTimeout(() => { that.parentNode.insertBefore(that, nextNode);}, 20000);
                                
                
                               });
                            }, 9000);
                           

                       }

                                      
                    })
                    .on('mouseover', (d, i, n) => {
                        tip.show(d, n[i])
                        handleMouseOver(d, i, n);
                    })
                    .on('mouseout', (d, i, n) => {
                        tip.hide();
                        handleMouseOut(d, i, n);
                    })
                    // .on("mouseout", function(d, i, n ) {
                    //     d3.select(n[i])
                    //         .transition().duration(7000)
                    //         .attrTween("d", (d) => { 
                           
                    //             let i = d3.interpolate(d.endAngle, d.endAngle - 360);
                    //             return function (t) {
                    //                 d.endAngle = i(t);
                    //                 return arcPath(d);
                    //             };
                    //         });
                    // })

                
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


    // TWEEN ENTER ANIMATIONS
    // generate the angles (interpolate them) we need and update them overtime
    // this animates them in the brower.
    // actually starts at endAngle and startAngle being the same...
    // startAngle then grows overtime to its final value.
    const arcTweenEnter = (d) => {
        let i = d3.interpolate(d.endAngle, d.startAngle);

        return function (t) {
            d.startAngle = i(t);
            return arcPath(d);
        };
    };

    // EVENT HANDLERS

    const handleMouseOver = (d, i, n) => {
        d3.select(n[i])
            
    }

    const handleMouseOut = (d, i, n) => {
        d3.select(n[i])
    }

}

export default graph;
