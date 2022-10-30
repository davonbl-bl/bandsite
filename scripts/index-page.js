
let newCommentForm = document.createElement('div');
newCommentForm.className.add = "axios-info-container";
let addItHere = document.querySelector(".comments");


addItHere.appendChild(newCommentForm);

//THIS IS FOR PUTTING ON THE COMMENT
// let div = document.querySelector(".post-info-container");
/*
axios.get(`https://project-1-api.herokuapp.com/comments${pKey}`)
then. 
--- This is my api Key --- 
?api_key=689fccf2-94ee-433f-a856-2f4a9a44d411
axios.get (URL)
*/


//this is my key 
const pKey = "689fccf2-94ee-433f-a856-2f4a9a44d411";

//this is where I am getting my comments from the data, and have it deploy on the comment section 
let newDiv = document.querySelector(".form"); 

    newDiv.addEventListener("submit", (event) => {
        event.preventDefault();

        let addNewName = event.target.fullName.value;
        let addNewComment = event.target.comment.value; 

        // this is for the 2nd parameter within the axios.post
        let newObject = {
            name:addNewName,
            comment:addNewComment         
            }

            //This is for the 3rd parameter within the axios.post as I need specifiy the header content type
        const requestHeaders = {"Content-Type": "application/json"};


        axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${pKey}`, newObject, {requestHeaders}
                ).then( (res) => {
                    newCommentForm.innerText ='';
                    event.target.fullName.value = "";
                    event.target.comment.value =""; 
                }   
            ).then ( () => {
            axiosGetComments(); 
     } )
            deployComments.innerText = ''; 
            newCommentForm.innerText ='';
            }
    )



        
const deployComments = (talk) => {

        let name = talk.name;
        let comment = talk.comment;
        let timeStamp = talk.timestamp; 
        // 1) Create an element
        // 2) Attach a classname
        // 3) Give it value
        let talkDiv = document.createElement("div");
        talkDiv.classList.add("talk__box");

        let talkName = document.createElement("p");
        talkName.classList.add("talk__name");
        talkName.innerText = name;

        let talkComment = document.createElement("p");
        talkComment.classList.add("talk__comments");
        talkComment.innerText = comment; 

        let talkTimeStamp = document.createElement("p");
        talkTimeStamp.classList.add("talk__timeStamp");
        talkTimeStamp.innerText = timeStamp; 

        talkDiv.appendChild(talkName);
        talkDiv.appendChild(talkComment);
        talkDiv.appendChild(talkTimeStamp);

        newCommentForm.appendChild(talkDiv);
}


const axiosGetComments = () =>{
    axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${pKey}`
        ).then((res) => {
            let testData = res;
            // console.log(testData); 
            let axiosData = res.data; 
            // console.log(axiosData); 

            orderComments(axiosData);             
            }
        ).catch((error) => {
            console.log(error)
            })
}  

axiosGetComments(); 

const orderComments = (axiosData) => {

    let sortedComments = axiosData.sort ((a,b) => a.timeStamp - b.timeStamp)

    for (let i=sortedComments.length - 1; i >= 0; i--){
        deployComments(sortedComments[i]);
    }
    console.log(sortedComments[sortedComments.length-1]); 
}

orderComments(); 