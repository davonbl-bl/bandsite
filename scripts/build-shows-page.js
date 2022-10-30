
/************************************
    BandSite - part 3
***************************************/


//this is my key 
const pKey = "689fccf2-94ee-433f-a856-2f4a9a44d411";

let newShowsTitle = document.createElement('h2');
newShowsTitle.classList.add("shows__title");
newShowsTitle.innerText = "Shows"; 

let newShowsContainer = document.createElement("div");
newShowsContainer.classList.add("shows-container");

let newAddItHereToo = document.querySelector(".shows");
newAddItHereToo.appendChild(newShowsTitle);
newAddItHereToo.appendChild(newShowsContainer); 

const axiosGetShows = () => {
    axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${pKey}`
    ).then((res) => {
        let newShowData = res.data;

        newDisplayShows(newShowData); 

                }
    ).catch((error) => {
    console.log(error)
    })
}  
axiosGetShows();


const newDisplayShows = (showObjects) => {

    for (let i= 0; i <showObjects.length; i++) {
// id, data, place, location
        let newId = document.createElement('p');
        newId.classList.add("shows-container__event-info");
        newId.innerText = showObjects[i].id;

        let newDate = document.createElement('p');
        newDate.classList.add("shows-container__event-info");
        newDate.innerText = showObjects[i].date;

        let newPlace = document.createElement('p');
        newPlace.classList.add("shows-container__event-info");
        newPlace.innerText = showObjects[i].place;

        let newLocation = document.createElement('p');
        newLocation.classList.add("shows-container__event-info");
        newLocation.innerText = showObjects[i].location; 

        newShowsContainer.appendChild(newId);
        newShowsContainer.appendChild(newDate);
        newShowsContainer.appendChild(newPlace);
        newShowsContainer.appendChild(newLocation);

}
}