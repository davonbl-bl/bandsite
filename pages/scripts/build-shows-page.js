/*

I created two objects. One for the first and top row of the show, and the second 
for the remaining shows. The reason is primarily that I couldn't figure how to have 
a display none for the DATE, VENUE, LOCATION, without effecting the top object's display.
This is the option I took to mediate on that issue in the meantime.

*/

//This is the example that I will focus on, and change up everything!!!!
//change the name of the item

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

    // {
    //     Date: "DATE",
    //     Day: "Sat Nov 06 2021",
    //     PlaceTOC: "VENUE",
    //     Venue: "Hyatt Agency",
    //     LocationTOC: "LOCATION",
    //     Location: "San Francisco, CA",
    //     Button: "BUY TICKETS"
    // },

    // {
    //     Date: "DATE",
    //     Day: "Fri Nov 26 2021",
    //     PlaceTOC: "VENUE",
    //     Venue: "Moscow Center",
    //     LocationTOC: "LOCATION",
    //     Location: "San Francisco, CA",
    //     Button: "BUY TICKETS"
    // },

    // {
    //     Date: "DATE",
    //     Day: "Wed Dec 15 2921",
    //     PlaceTOC: "VENUE",
    //     Venue: "Press Club",
    //     LocationTOC: "LOCATION",
    //     Location: "San Francisco, CA",
    //     Button: "BUY TICKETS"
    // }
]

// const displayNoneShows = [
//     {
//         Date: "Tue Sept 21 2021",
//         Venue: "Pier 3 East",
//         Location: "San Francisco, CA"
//     }

//     {
//         Date: "Fri Oct 15 2021",
//         Venue: "View Lounge",
//         Location: "San Francisco, CA"
//     }
// ]

/*
let commentForm = document.createElement('div');

commentForm.className.add = "post-info-container"; 

let addItHere = document.querySelector(".comments");

addItHere.appendChild(commentForm);

*/

/*


//creating an element that will be append to the body
let shows = document.createElement('section');
shows.className.add = "shows";

let mainBody = document.querySelector("body");
mainBody.appendChild(shows);

//creating elements that will be append to the show class element
let showsTitle = document.createElement('h2');
showsTitle.className.add = "shows__title";
showsTitle.innerText = "Shows";

shows.appendChild(showsTitle);

//creating a sub-container to append to the bigger container that is shows

let showsContainer = document.createElement('div');
showsContainer.className.add = "shows-container";

shows.appendChild(showsContainer);

//appending a table of contents like div inside the showsContainer

let showsContainerMobileSubtitles = createElement('div');
showsContainerMobileSubtitles.className.add = "shows-container__mobile--subtitles";

shows.appendChild(showsContainerMobileSubtitles);

//creating h5 elements that will be append to the t.o.c like div

let showsDateTablet = createElement('h5');
let showsVenueTablet = createElement('h5');
let showsLocationTablet = createElement('h5');

showsDateTablet.className.add= "shows-container__event--tablet";
showsVenueTablet.className.add= "shows-container__event--tablet";
showsLocationTablet.className.add= "shows-container__event--tablet";

shows.appendChild(showsDateTablet);
shows.appendChild(showsVenueTablet);
shows.appendChild(showsLocationTablet);


const displayShows = () {
    for (let i=0; i < defaultComments.length; i++){




    }







}


*/