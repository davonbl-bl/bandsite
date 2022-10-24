
const defaultShow = [
    {
        DateTOC: "DATE", 
        /*Pervious Date */Day: "Mon Sept 06 2021",
        PlaceTOC: "VENUE",
        Venue: "Ronald Lane", 
        LocationTOC: "LOCATION",
        Location: "San Francisco, CA",
        Button: "BUY TICKETS"
    },
    

    {
        DateTOC: "DATE",
        Day: "Tue Sept 21 2021",
        PlaceTOC: "VENUE",
        Venue: "Pier 3 East",
        LocationTOC: "LOCATION",
        Location: "San Francisco, CA",
        Button: "BUY TICKETS"
    },

    {
        DateTOC: "Fri Oct 15 2021",
        Day: "Fri Oct 15 2021",
        PlaceTOC: "VENUE",
        Venue: "View Lounge",
        LocationTOC: "LOCATION",
        Location: "San Francisco, CA",
        Button: "BUY TICKETS"
    },

    {
        Date: "DATE",
        Day: "Sat Nov 06 2021",
        PlaceTOC: "VENUE",
        Venue: "Hyatt Agency",
        LocationTOC: "LOCATION",
        Location: "San Francisco, CA",
        Button: "BUY TICKETS"
    },

    {
        Date: "DATE",
        Day: "Fri Nov 26 2021",
        PlaceTOC: "VENUE",
        Venue: "Moscow Center",
        LocationTOC: "LOCATION",
        Location: "San Francisco, CA",
        Button: "BUY TICKETS"
    },

    {
        Date: "DATE",
        Day: "Wed Dec 15 2021",
        PlaceTOC: "VENUE",
        Venue: "Press Club",
        LocationTOC: "LOCATION",
        Location: "San Francisco, CA",
        Button: "BUY TICKETS"
    }
]

//creating an element that will be append to the body
// let shows = document.createElement('section');
// shows.className.add = "shows";

// let mainBody = document.querySelector("body");
// mainBody.appendChild(shows);


//this is where I create a variable to create an element, add the class of
//shows-container as you see

// let mainShows = document.createElement('section');
// mainShows.classList.add("shows");

let showsTitle = document.createElement('h2');
showsTitle.classList.add("shows__title");
showsTitle.innerText = "Shows";

let showsContainer = document.createElement("div");
showsContainer.classList.add("shows-container");

let addItHereToo = document.querySelector(".shows");

// mainShows.appendChild(showsTitle);
// mainShows.appendChild(showsContainer); 

addItHereToo.appendChild(showsTitle);
addItHereToo.appendChild(showsContainer); 

let showsContainerMobileSubtitles = document.createElement('div');
showsContainerMobileSubtitles.classList.add("shows-container__mobile--subtitles");
showsContainer.appendChild(showsContainerMobileSubtitles);

//creating h5 elements that will be append to the showsContainer div 

let showsDateTablet = document.createElement('h5');
let showsVenueTablet = document.createElement('h5');
let showsLocationTablet = document.createElement('h5');

showsDateTablet.classList.add("shows-container__event--tablet");
showsVenueTablet.classList.add("shows-container__event--tablet");
showsLocationTablet.classList.add("shows-container__event--tablet");

showsDateTablet.innerText = "DATE";
showsVenueTablet.innerText = "VENUE";
showsLocationTablet.innerText = "LOCATION";

showsContainerMobileSubtitles.appendChild(showsDateTablet);
showsContainerMobileSubtitles.appendChild(showsVenueTablet);
showsContainerMobileSubtitles.appendChild(showsLocationTablet);

//creating elements that will be append to the show class element

//creating a sub-container to append to the bigger container that is shows
//appending a table of contents like div inside the showsContainer

const displayShows = () => {
    for (let i=0; i < defaultShow.length; i++){

        let showsContainerEvent = document.createElement("section");
        showsContainerEvent.classList.add( "shows-container__event");
    

        let eventDateSubtitle = document.createElement("h5");
        let eventInfoDay = document.createElement("p");
        let eventPlaceSubtitle = document.createElement("h5");
        let eventInfoVenue = document.createElement("p");
        let eventLocationSubtitle = document.createElement("h5");
        let eventInfoLocation = document.createElement("p");
        let eventButton = document.createElement("a");


        eventDateSubtitle.classList.add("shows-container__event-subtitle");
        eventInfoDay.classList.add("shows-container__event-info");
        eventInfoDay.classList.add("shows-container__event-info--bold");
        eventPlaceSubtitle.classList.add("shows-container__event-subtitle");
        eventInfoVenue.classList.add("shows-container__event-info");
        eventLocationSubtitle.classList.add("shows-container__event-subtitle");
        eventInfoLocation.classList.add ("shows-container__event-info");
        eventButton.classList.add("shows-container__event--button");
        eventButton.classList.add("clickButtons"); 


        eventDateSubtitle.innerText = defaultShow[i].DateTOC;        
        eventInfoDay.innerText = defaultShow[i].Day;
        eventPlaceSubtitle.innerText = defaultShow[i].PlaceTOC;
        eventInfoVenue.innerText = defaultShow[i].Venue;
        eventLocationSubtitle.innerText = defaultShow[i].LocationTOC;
        eventInfoLocation.innerText = defaultShow[i].Location; 
        eventButton.innerText = defaultShow[i].Button;

        showsContainerEvent.appendChild(eventDateSubtitle);
        showsContainerEvent.appendChild(eventInfoDay);
        showsContainerEvent.appendChild(eventPlaceSubtitle);
        showsContainerEvent.appendChild(eventInfoVenue);
        showsContainerEvent.appendChild(eventLocationSubtitle);
        showsContainerEvent.appendChild(eventInfoLocation);
        showsContainerEvent.appendChild(eventButton); 

        showsContainer.appendChild(showsContainerEvent);
        
        const clickButton = document.querySelectorAll(".clickButtons");

        // although the button works, I didn't have engough time to figure out how 
        // to click on one button, and then click on the next button where the pervious
        // clicked button will go unclicked (maybe writing out an if statement is an option??)
        clickButton.forEach (function(clickButtons) {
            clickButtons.addEventListener('click', function (e){
                console.log(e.currentTarget);
                e.currentTarget.innerText = "CLICKED";
            })
        })





        

    }

}
displayShows(); 


// const clickButton= document.querySelectorAll(".clickButtons");

// clickButton.forEach(function(clickButtons) {
//     clickButtons.addEventListner('click', function(e){
//         console.log(e.currentTarget);
//         e.currentTarget.innerText = "clicked";
//         }
//     )
// }
//     )

// }



// const anchorButton = document.querySelector('a');




/*
Additionally, clicking on an individual row should make that row "selected", applying a 
modifier CSS class via JavaScript. The row should stay “selected” until another row is 
clicked. 
Utilize your knowledge of both JavaScript and Sass to accomplish this.
event.currentTarget

*/