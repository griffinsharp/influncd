## Background
Data is a beautiful, incredibly powerful thing, but is far too often not presented as such. INFLUNCD hopes to help better visually represent who influenced, and to what degree, the current landscape of popular music in Western culture. Discovering more about your favorite musician's favorite musician in just a few clicks away.

## Functionality & MVP
With this data visualization of the 100 Most Influential Artists, users will be able to:

- [ ] Represent each of the 100 artists as a 'slice' of the chart, with size representative of the # of artists influenced. 
- [ ] Clicking on a 'slice' of the chart reveals a picture, a short artist bio, and a link to the artists Apple Music page. 
- [ ] Hovering over a 'slice' and clicking the 'slice' will trigger animations.
- [ ] Utilize the D3.js library and Wikipedia API.
- [ ] Utilize Google Firebase for data persistence.

In addition, this project will include:

- [ ] An 'about' modal for a brief explanation and source concerning the data used. 
- [ ] A production README.

## Wireframes
This visualization will be a single page, with the circular data visualization in the center, with my social links (gitHub, linkedIn, etc.) and about modal to the left side. The goal is to gear all attention towards the chart representation, without having to navigate away to various artist pages, instead letting D3 present this information as it is requested. Since this is not as graphically intensive as a game, I would like to have as much animation as possible. This includes, at the very least, when a user arrives to the page, when a graph slice is hovered, and when a graph slice is clicked. 

~ wireframe pics ~

## Architecture and Technologies
NB: one of the main things you should be researching and deciding upon while you write this proposal is what technologies you plan to use. Identify and create a plan of attack for the major technical challenges in your project.

This project will be implemented with the following technologies:

  - Vanilla JavaScript for underlying logic and functionality,
  - D3.js for data based DOM manipulation,
  - Browserify to bundle js for the web,
  - Webpack to bundle js files,
  - Babel for backwards compatility for non-ECMAScript 2015+ engines,
  - Wikipedia API for artist bios,
  - Google Firebase for persistent of backend data.


In addition to the entry file, there will be three scripts involved in this project:

`graph.js`: logic
`EDIT.js`: not sure yet
`EDIT.js`: not sure yet

## Implementation Timeline
Day 1: Basic setup of project. This includes installing all needed node modules, the basic js entry files, and making sure my bundlers are in working order. Prior to this, I have never used D3, so I will learn the basics needed to atleast get my project up and working. Peristence of picture and artist data to Google Firebase backend. 

Goals for the day:
Have my project outlined and ready to go.
Files bundling correctly and able to be viewed locally in the browser.
Teach myself enough D3 to render a simple pie chart.
Have a few pictures stored on Firebase and proper interaction with the API.

Day 2: This day will primarily be for the learning of D3 and connecting my project to firebase. I need to make sure all the slices are taking up their appropriate space, as well as rendering their picture correctly, both in the slice and full states. Basic animations should be implemented, but not yet the main focus. Interaction with firebase is important to keep my project lightweight, so making sure this resource is being utilized correctly before proceeding is important.

Goals for the day:

Have the slices represent their proper size according to level of influence.
Have some basic animations of the pie slices upon user interaction. 
Have most pictures stored to database and rendering on their corresponding slice. 

Day 3: Work on each artist's bio. Implement the Wikipedia API and learn how to parse the first paragraph of each artist's page. Grab the artist's Apple Music/Spotify pages. Create more complex animations upon human interaction, such as the full swipe from 1/100 of the pie to the whole pie. 

Goals for the day:

Project should be navigatable between the full pie and a slice of the pie, able to go back and forth by clicking on the center of the chart. Project at this point will have most of the functionality, just left to be styled.  

Day 4: Add the about modal and social links. More styling to the frontend, making it presentable and eye-catching. Add more animation, and overall improve the UI and UX.

Goals for the day: Fix any major bugs concerning JS and D3 functionality. Style to fit and reflect all wireframes/mockups. Links and modal with no broken links. 



## Bonus features
If all goes well, I would like to eventually have the following featured implemented in INFLUNCD:

- [ ] Optionally tune the results to most influential by genre and US city.
- [ ] Show a random slice of the pie with a spinning 'prize wheel' animation.
- [ ] A 'light' and 'dark' mode via CSS listeners.

## Links (for development purposes only, will be removed in production...)
Sunburst Diagram - https://observablehq.com/@d3/zoomable-sunburst
Data Article - https://qz.com/1094962/a-definitive-list-of-the-musicians-who-influenced-our-lives-most/
https://www.theatlas.com/charts/S1QdKOZ3-
Data - https://www.theatlas.com/charts/S1QdKOZ3-
