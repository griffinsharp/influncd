## Background
Data is a beautiful, incredibly powerful thing, but is far too often not presented as such. [INFLUNCD](https://influncd.com/) hopes to help better visually represent who influenced, and to what degree, the current landscape of popular music in Western culture. Discovering more about your favorite musician's favorite musician is just a few clicks away.

Start by hovering over slices of the graph until you find an artist you're interested in. Then, give the slice a click, which will trigger an animation. Once the artist profile takes up the whole graph, feel free to check them out. Once you're done with your research, navigate back to the full graph by clicking on any blank space outside of the graph. For more on how I made this visualization, where I sourced the data, or any other questions, first check out the 'about' tab on the left side of the page. If you still have questions, or just would like to connect, my socials can be found right below the 'about' section. Enjoy!

# Site Functionality 
Here's a glimpse at INFLUNCD in 3 gifs. To really appreciate the details in its D3 animations, JavaScript DOM Manipulation, and CSS tricks, please visit it in browser and navigate around. 
![gif 1](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/inanim.gif)
![gif 2](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/outanim.gif)
![gif 3](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/modal.gif)

## Wireframes
This visualization will be a single page, with the circular data visualization in the center, with my social links (gitHub, linkedIn, etc.) and 'about' modal to the left side. The goal is to gear all attention towards the chart representation, without having to navigate away to various artist pages, instead letting `D3` present this information as it is requested. These wireframes were drafted prior to the project being started to help guide my code visually.

![wireframe 1](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/Window1.png)
![wireframe 2](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/Window2.png)
![wireframe 3](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/Window3.png)
![wireframe 4](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/Window4.png)

## Code Snippets 
Here are a few snippets from INFLUNCD's source code. 

![Snippet 1](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/AnimationBackToFullCircle.png)
![Snippet 2](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/ImageDownload.png)
![Snippet 3](https://github.com/griffinsharp/INFLUNCD/blob/master/assets/GraphRender.png)

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
