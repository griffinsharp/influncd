
function modal() {
    // set up var for the about-container
    console.log('hi');
    const about = document.querySelector("div.about-container");

    // on a click of the about
    about.addEventListener("click", function () {
        let modalBackground = document.createElement('div');
        modalBackground.className = 'background-modal';

        document.querySelector("div.project-container")
            .append(modalBackground);

        let exitButton = document.createElement('div');
        exitButton.className = 'exit-button';

        exitButton.innerHTML = '<i class="far fa-times-circle"></i>'

        document.querySelector("div.background-modal")
            .append(exitButton);


        let modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        document.querySelector("div.background-modal")
            .append(modalContainer);

    
        let title = document.createElement('div');
        title.className = 'modal-title';
        title.innerHTML = "INFLUNCD";
        document.querySelector("div.modal-container")
            .append(title);

        let subTitle = document.createElement('div');
        subTitle.className = 'modal-subtitle';
        subTitle.innerHTML = "A JavaScript data visualization by Griffin Sharp.";
        document.querySelector("div.modal-container")
            .append(subTitle);

        let intro = document.createElement('div');
        intro.className = 'modal-intro';
        intro.innerHTML = "Data is a beautiful, incredibly powerful thing, but is far too often not presented as such. INFLUNCD hopes to help better visually represent who influenced, and to what degree, the current landscape of popular music in Western culture. Discovering more about your favorite musician's favorite musician is just a few clicks away.";
        document.querySelector("div.modal-container")
            .append(intro);

        let tutorial = document.createElement('div');
        tutorial.className = 'modal-tutorial';
        tutorial.innerHTML = "Using INFLUNCD is simple. Hover over the slice of the graph to reveal the associated artist's name and their influence relative to the 99 other artists displayed. Click on the slice to trigger an animation, revealing specific information pertaining to the artist and a link to read more. Once you've concluded your research, simply click the text below the graph to return back to where you started.";
        document.querySelector("div.modal-container")
            .append(tutorial);

        let links = document.createElement('div');
        links.className = 'modal-links';
        links.innerHTML = "The data used for this project was provided via a blah blah by Quartz in blah. In short, they did blah using blah and saw blah. Something about the data/not to get confused by the numbers or the innacuracies. This being said, an artist on here may have a fraction of the graph attributed to them, but they are being compared to the other top 99, so keep that in mind.  ";
        document.querySelector("div.modal-container")
            .append(links);
        

        



        exitButton.addEventListener("click", function () {
            modalBackground.classList.add("fade-out-modal");
            setTimeout(() => {
                modalBackground.remove();
            }, 2000);
        })

        
    });

    
    
}

export default modal;

// let nameDiv = document.createElement('div');
// nameDiv.className = 'name-box';
// let artistName = d.data.artist.includes("_") ? d.data.artist.split("_").join(" ") : d.data.artist;
// nameDiv.innerHTML = `${artistName}`;
// document.querySelector("div.project-container")
//     .append(about);
