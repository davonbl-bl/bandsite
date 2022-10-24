const defaultComments= [ {
    BlankImage:"",
    Name: "Connor Walton",
    Date: "02/17/2021",
    Comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
}, {
    BlankImage: "",
    Name: "Emilie Beach",
    Date: "01/09/2021",
    Comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
 },

 {
    BlankImage:"",
    Name: "Miles Acosta",
    Date: "12/20/2020",
    Comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
 }

]

/*

const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

// Create a class attribute:
const att = document.createAttribute("class");

// Set the value of the class attribute:
att.value = "democlass";

// Add the class attribute to the first h1:
const h1 = document.getElementsByTagName("H1")[0];
h1.setAttributeNode(att);

*/


let commentForm = document.createElement('div');

commentForm.className.add = "post-info-container"; 

let addItHere = document.querySelector(".comments");

addItHere.appendChild(commentForm);

// let div = document.querySelector(".post-info-container");
let newDiv = document.querySelector(".form"); 





newDiv.addEventListener("submit", (event) => {

    event.preventDefault();
    let addNewName = event.target.fullName.value;
    // const addNewDate = event.target.Date.value;
    let addNewComment = event.target.comment.value; 
    let addNewDate = new Date(); 


    console.log(addNewName); 
    // displayComments()

    //create an comment obj
    const newObject = {
        Name:addNewName,
        Comment:addNewComment,
        Date: addNewDate         
    }

    //push into arr

    defaultComments.unshift(newObject); 

    commentForm.innerText = '';

    displayComments(); 

    event.target.fullName.value = "";
    event.target.comment.value =""; 


//repeating the same process with the comment sections
// remove the removing the comments 

}


)

const displayComments = () =>{

    for (let i=0; i < defaultComments.length; i++){
        // you are creating a container/div to hold onto the comment, the date, and the name
    
        let currentComment = document.createElement("div");
        currentComment.classList.add("current-comment");
    
        //you are creating an element thats a p tag which will be store in a variable
        // and can be used to add onto with DOM methods
        
        let blankImage = document.createElement('p');
        let name = document.createElement("p");
        let date = document.createElement("p");
        let comment = document.createElement("p");

    
        // you need to add the classes i.e., .classList, to connect to the styling
        
        blankImage.classList.add("current-comment__image");
        name.classList.add("current-comment__name");
        //vs
        // name.classList = "current-comment__name"
        date.classList.add("current-comment__date");
        comment.classList.add("current-comment__comment");

    
        // this is in reference to the inner text- the text inside each obj of the array
        blankImage.innerText= defaultComments[i].BlankImage;
        name.innerText= defaultComments[i].Name;
        date.innerText= defaultComments[i].Date;
        comment.innerText= defaultComments[i].Comment;
        
    
        //
        currentComment.appendChild(blankImage); 
        currentComment.appendChild(name);
        currentComment.appendChild(date);
        currentComment.appendChild(comment);
        
    
        // console.log(name);
        // console.log()
    
        commentForm.appendChild(currentComment);

        console.log(currentComment); 
        
    }


}

displayComments(); 



// adding eventListner 
//make a function 
