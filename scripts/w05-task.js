/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templesList = [];



/* async displayTemples Function */

     


//displayTemples(templesList);

/* async getTemples Function using fetch()*/
const getTemples = async() =>{
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    //converting response into (.json) adn assigning the result to the templeList global array. The process is waiting with ifs statements.
    if(response.ok){
        const data = await response.json();
        templesList = data;
    } else {
        console.log("Error");
    }
};
const displayTemples = (templesList) => {
    templesList.forEach((temple) => {
        //creating an article
        const articleE = document.createElement("article");
        //creating h3 and adding the property templeName from the array temples to h3.
        const h3E = document.createElement("h3");
        h3E.textContent = temple.templeName;
        //creating an img and adding it images from the temples, and add atributes: src(imagesUrl) and alt(location).
        const imgE = document.createElement("img");
        imgE.src = temple.imageUrl;
        imgE.alt = temple.location;
        //appending h3E and imgE to the articleE as children
        articleE.appendChild(h3E);
        articleE.appendChild(imgE);
        //appending articleE to the goblal variable templesElement
        templesElement.appendChild(articleE);
    });
    };


/* reset Function */
function reset(){
    const templesElement = document.querySelector("#temples");
    //clearing the variable templesElement
    templesElement.innerHTML = '';

}


/* sortBy Function */
const sortBy = (temples) =>{
    //Calling reset function to clean first.
    reset();
    //getting the value of sortBy
    const filter = document.getElementById("sortBy").value; 
    //filtering temples from Utah and display them
    switch(filter){
    case 'utah':
        const utahTemples = temples.filter(temple => temple.location.includes('Utah'));
        displayTemples(utahTemples);
        break;
     
    //filtering temples outside of Utah and display them
    case'notutah':
        const notUtTemple = temples.filter(temples => !temples.location.includes('Utah'));
        displayTemples(notUtTemple);
    
    //filtering temples built before 1950 and display them
    case'older':
    const olderTem = temples.filter(temple => {
        const dedicatedYear = temple.dedicated.split(',')[0].trim(); // Extracting the year from the 'dedicated' string
        return parseInt(dedicatedYear) < 1950; // Comparing the parsed year with 1950
        });
        displayTemples(olderTem);
        break;

    //displaying all the Temples.
    case 'all':
        default:
            displayTemples(temples);
            break;
    }
};






/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => {
    sortBy(templesList)});

getTemples();