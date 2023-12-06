/*Project*/

/* Declare and initialize global variables */
const countryElement = document.querySelector('#country');
let countriesList = [];


/* async getCountries Function using fetch()*/
const getCountries = async() =>{
    const response = await fetch('https://run.mocky.io/v3/d9d734f1-3055-4d67-86d6-3cd7267dc8d8');
    //converting response into (.json) adn assigning the result to the templeList global array. The process is waiting with ifs statements.
    if(response.ok){
        
        countriesList = await response.json();
        console.log("Data: ", countriesList);
    } else {
        console.log("Error", response);
    }
    displayCountry(countriesList);
};

/* DisplayTemples Function */

    const displayCountry = (countriesList) => {
    countriesList.forEach((con) => {
        //creating an article
        const articleE = document.createElement("article");
        //creating h3 and adding the property templeName from the array temples to h3.
        const h3E = document.createElement("h3");
        h3E.textContent = con.country;
        //creating an img and adding it images from the temples, and add atributes: src(imagesUrl) and alt(location).
        const imgE = document.createElement("img");
        imgE.src = con.image || '';
        imgE.alt = con.altText || '';
        //appending h3E and imgE to the articleE as children
        articleE.appendChild(h3E);
        articleE.appendChild(imgE);
        //appending articleE to the goblal variable templesElement
        countryElement.appendChild(articleE);
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
        //Extracting the year from the 'dedicated' string, first splitting separating it by commas, and after with method trim() removing whitespaces.
        const dedYear = temple.dedicated.split(',')[0].trim(); 
        //Converting deYear to int so it can be compared with 1950
        return parseInt(dedYear) < 1950; 
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

//Calling the function getTemples()
getCountries();
displayCountry(countriesList);