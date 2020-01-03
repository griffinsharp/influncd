import graph from './graph.js';
import modal from './modal.js';

function greeting() {
    
    graph();

        let modalBackground = document.createElement('div');
        modalBackground.className = 'background-greeting';

        document.querySelector("div.project-container")
            .append(modalBackground);

        let exitButton = document.createElement('div');
        exitButton.className = 'exit-button';

        exitButton.innerHTML = '<i class="far fa-times-circle"></i>'

        document.querySelector("div.background-greeting")
            .append(exitButton);


        let modalContainer = document.createElement('div');
        modalContainer.className = 'greeting-container';
        document.querySelector("div.background-greeting")
            .append(modalContainer);


        let title = document.createElement('div');
        title.className = 'greeting-title';
        title.innerHTML = "Welcome to INFLUNCD";
        document.querySelector("div.greeting-container")
            .append(title);

        let subTitle = document.createElement('div');
        subTitle.className = 'greeting-subtitle';
        subTitle.innerHTML = "Let's get started:";
        document.querySelector("div.greeting-container")
            .append(subTitle);

        let intro = document.createElement('div');
        intro.className = 'greeting-intro';
        intro.innerHTML = "1. Hover your cursor over a slice of the chart. Each slice represents an artist.";
        document.querySelector("div.greeting-container")
            .append(intro);

        let tutorial = document.createElement('div');
        tutorial.className = 'greeting-tutorial';
        tutorial.innerHTML = "2. Click on a slice to learn more about that artist.";
        document.querySelector("div.greeting-container")
            .append(tutorial);
            

        let links = document.createElement('div');
        links.className = 'greeting-links';
        links.innerHTML = "3. Done? Click the button below the chart to return back to the starting position.";
        document.querySelector("div.greeting-container")
            .append(links);

    let links2 = document.createElement('div');
    links2.className = 'greeting-footer-top';
    links2.innerHTML = "Want to learn more about the technologies used or how 'relative influence' is calculated?";
    document.querySelector("div.greeting-container")
        .append(links2);
        

    let links3 = document.createElement('div');
    links3.className = 'greeting-footer';
    links3.innerHTML = "Click on the 'about' tab (left side of the page) or checkout the <a class='quartz-allmusic' target='_blank' href=https://github.com/griffinsharp/INFLUNCD>github repo.</a>";
    document.querySelector("div.greeting-container")
        .append(links3);
    







        exitButton.addEventListener("click", function () {
            modalBackground.classList.add("fade-out-modal");
            modal();
            setTimeout(() => {
                modalBackground.remove();
            }, 400);
        })




}

export default greeting;