## Background
Data is a beautiful, incredibly powerful thing, but is far too often not presented as such. [INFLUNCD](https://influncd.com/) hopes to help better visually represent who influenced, and to what degree, the current landscape of popular music in Western culture. Discovering more about your favorite musician's favorite musician is just a few clicks away.

Start by hovering over slices of the graph until you find an artist you're interested in. Then, give the slice a click, which will trigger an animation. Once the artist profile takes up the whole graph, feel free to check them out. Once you're done with your research, navigate back to the full graph by clicking on any blank space outside of the graph. For more on how I made this visualization, where I sourced the data, or any other questions, first check out the 'about' tab on the left side of the page. If you still have questions, or just would like to connect, my socials can be found right below the 'about' section. Enjoy!

## Site Functionality 
Here's a glimpse at INFLUNCD in 3 gifs. To really appreciate the details in its D3 animations, JavaScript DOM Manipulation, and CSS tricks, please visit it in browser (Chrome for best performance) and navigate around. 

<p align="center"> 
<img src="https://github.com/griffinsharp/INFLUNCD/blob/master/assets/inanim.gif">
<img src="https://github.com/griffinsharp/INFLUNCD/blob/master/assets/exitanim.gif">
<img src="https://github.com/griffinsharp/INFLUNCD/blob/master/assets/modal.gif">
</p>

## Wireframes
This visualization will be a single page, with the circular data visualization in the center, with my social links (gitHub, linkedIn, etc.) and 'about' modal to the left side. The goal is to gear all attention towards the chart representation, without having to navigate away to various artist pages, instead letting `D3` present this information as it is requested. These wireframes were drafted prior to the project being started to help guide my code visually.

![wireframe 1](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/Window1.png)
![wireframe 2](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/Window2.png)
![wireframe 3](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/Window3.png)
![wireframe 4](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/Window4.png)

## Code Snippets 
Here are a few snippets from INFLUNCD's source code with short blurbs to guide you through whats going on. 

### D3 Transitions + DOM Manipulation

<p align="center"> 
<img src="https://github.com/griffinsharp/INFLUNCD/blob/master/assets/AnimationBackToFullCircle.png">
</p>

This is the code to handle when the "I'm done here. Take me back!" prompt is clicked. I have setup an event listener to listen for a click on this button element, set to the variable `el`. Upon a click, the musicians name, bio, and the button itself receive a class via `JavaScript` DOM manipulation, which give it a nice `CSS` fade out animation via @keyframes and mapping opacity from 1 to 0 (see `graph.css` for more on this). This solved the problem of having a fade-in and fade-out animation on the same element.

The goal of the `trigger` variable is to limit when the user's click will actually fire the callback function, only to be ran when it's value is true. This was used to solve the problem of clicking several different slices or even the same slice multiple times, causing some unintended behavior.

The last part is a `D3` transition from the full musician circle back to its respective slice of the graph, interpolating between the `endAngle`'s current value, and the `endAngle`'s original value. `D3`'s `.interpolate()` method just takes a start and end value, which it transitions to over the time specified in `.duration()`, as we `return arcPath(d)` to repaint the outer path of the current slice back to its original, pre-clicked state.

The final `setTimeout()` function puts the `D3` path node back in its previous spot, which I made sure to save reference to so I can use `.insertBefore()`. Rearranging the order of paths was crucial in allowing the slices to cover/not cover the other slices and animate appropriately.

### Firebase Asset Management 

<p align="center"> 
<img src="https://github.com/griffinsharp/INFLUNCD/blob/master/assets/ImageDownload.png">
</p>

In order to keep my app very lightweight and increase scalability, INFLUNCD's image assets are fully stored on a `Google Firebase` database. However, Google keeps its Firebase data seperate from its storage data, with the two agnostic of eachother.

To bridge this gap, each artist in the database has a value of "image" pointing to an image url key. Upon loading the page, this `getImg(imgPath)` function dynamically requests (via axios routing) the correct image for all 100 artists, so then it can then be used as a svg pattern and mapped to the correct `D3` path. 

### SVG Magic ✨

<p align="center"> 
<img src="https://github.com/griffinsharp/INFLUNCD/blob/master/assets/GraphRender.png">
</p>

Throughout all my research for this project, I really could not find one good example of what I was trying to do as far as mapping individual slices of a piechart to unique images. I tried many different solutions, but ulimately what I went with was saving each image to an svg 'pattern' with an id set to the image's unique url given from Firebase mentioned in the above snippet.

As I iterate through each artist and select their slice on the DOM by unique ID, I give it a fill of `url(#${url})`. Since D3 paths are technically svgs, it finds the associated pattern/image under 'defs' with the matching ID, which is just `#firebase_url`, and it simply fills the path's background with the pattern/image. A path stroke is added, along with a `D3` `.transition()` + `duration()`, and a callback to `arcTweenEnter`, which is a function that handle's the initial loading animation of the slices when the graph first appears. 

## Architecture and Technologies
This project will be implemented with the following technologies:

  - `JavaScript` for underlying logic and functionality.
  - `D3.js` for data based DOM manipulation.
  - `Parcel` to bundle js files for the web.
  - `Babel` for backwards compatility for non-ECMAScript 2015+ engines.
  - `Wikipedia API` for artist bios.
  - `Google Firebase` for persistent of backend data and asset storage.
  - `CSS3`, and `HTML5` for additional animations/general webpage setup. 


In addition to the entry file, there will be three scripts involved in this project:

`graph.js`: Majority of the d3 logic.
`modal.js`: DOM manipulation for creation and deletion of modal on 'click'.
`upload.js`: Single use, batch upload data to firebase via json (artists.json).
`index.js`: Script entry file.

## Bonus Features
For INFLUNCD, I would like to eventually be able to implement a few more features:
- An option to tune the results to most influential by genre and US city.
- Showing a random slice of the pie upon a click of a button.
- A 'light' and 'dark' mode to explore `CSS` variables. 
- Links to Spotify/Apple Music pages below bio.

## Extras
For information on this project, such as where I sourced the data, please click on the "about" button on the left side of the page.
