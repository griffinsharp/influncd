function modal() {
  // set up var for the about-container
  const about = document.querySelector("div.about-container");

  // on a click of the about
  about.addEventListener("click", function() {
    let modalBackground = document.createElement("div");
    modalBackground.className = "background-modal";

    document.querySelector("div.project-container").append(modalBackground);

    let exitButton = document.createElement("div");
    exitButton.className = "exit-button";

    exitButton.innerHTML = '<i class="far fa-times-circle"></i>';

    document.querySelector("div.background-modal").append(exitButton);

    let modalContainer = document.createElement("div");
    modalContainer.className = "modal-container";
    document.querySelector("div.background-modal").append(modalContainer);

    let title = document.createElement("div");
    title.className = "modal-title";
    title.innerHTML = "INFLUNCD";
    document.querySelector("div.modal-container").append(title);

    let subTitle = document.createElement("div");
    subTitle.className = "modal-subtitle";
    subTitle.innerHTML = "A JavaScript data visualization by Griffin Sharp.";
    document.querySelector("div.modal-container").append(subTitle);

    let intro = document.createElement("div");
    intro.className = "modal-intro";
    intro.innerHTML =
      "Data is a beautiful, incredibly powerful thing, but is far too often not presented as such. INFLUNCD hopes to help better visually represent who influenced, and to what degree, the current landscape of popular music in Western culture. Discovering more about your favorite musician's favorite musician is just a few clicks away.";
    document.querySelector("div.modal-container").append(intro);

    let tutorial = document.createElement("div");
    tutorial.className = "modal-tutorial";
    tutorial.innerHTML =
      "Using INFLUNCD is simple. Hover over a slice of the graph to reveal the associated artist's name and their influence relative to the 99 other artists. Then, click on the slice to reveal specific information pertaining to the artist with a link to continue reading. Once you've concluded your research, simply click the text below the graph to return back to where you started.";
    document.querySelector("div.modal-container").append(tutorial);

    let links = document.createElement("div");
    links.className = "modal-links";
    links.innerHTML =
      "The data utilized for this project was provided via <a class='quartz-allmusic' target='_blank' href=https://qz.com/1094962/a-definitive-list-of-the-musicians-who-influenced-our-lives-most/>Quartz</a> and <a class='quartz-allmusic' target='_blank' href=https://www.theatlas.com/charts/S1QdKOZ3- />AllMusic</a>. They '[collected data] on 53,630 artists, of which about 25,600 were listed as having influenced or been influenced by at least one other artist.' In short, they assembled connections between artists from research, interviews, or strong editor inference, and although this method may come with some inherent biases, it's said to be the most 'thorough examination of artist relationships to exist.'";
    document.querySelector("div.modal-container").append(links);

    let warning = document.createElement("div");
    warning.className = "modal-warning";
    warning.innerHTML =
      "Having trouble viewing? INFLUNCD is currently optimized to run on the Google Chrome desktop browser due to animation and library performance.";
    document.querySelector("div.modal-container").append(warning);

    exitButton.addEventListener("click", function() {
      modalBackground.classList.add("fade-out-modal");
      setTimeout(() => {
        modalBackground.remove();
      }, 400);
    });
  });
}

export default modal;

// let nameDiv = document.createElement('div');
// nameDiv.className = 'name-box';
// let artistName = d.data.artist.includes("_") ? d.data.artist.split("_").join(" ") : d.data.artist;
// nameDiv.innerHTML = `${artistName}`;
// document.querySelector("div.project-container")
//     .append(about);
