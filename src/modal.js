
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

        
    });

    
}

export default modal;

// let nameDiv = document.createElement('div');
// nameDiv.className = 'name-box';
// let artistName = d.data.artist.includes("_") ? d.data.artist.split("_").join(" ") : d.data.artist;
// nameDiv.innerHTML = `${artistName}`;
// document.querySelector("div.project-container")
//     .append(about);
