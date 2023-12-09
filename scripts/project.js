/*Project Traveling Sud America*/

/* Declare and initialize global variables */
const countryElement = document.querySelector('#country');
let countriesList = [];


/* async getCountries Function using fetch()*/
const getCountries = async() =>{
    const response = await fetch('https://run.mocky.io/v3/1769c572-22b3-4a77-92d6-051ffa0a40a9');
//converting response into (.json) adn assigning the result to the  countriesList global array. The process is waiting with ifs statements.
    if(response.ok){
        
        const data = await response.json();
        countriesList = data;
        console.log("Data: ", countriesList);
    } else {
        console.log("Error", response);
    }
    
};

//Funtion displayCountry(), it takes 2 arguments, le country selected and the array
const displayCountry = (selectedCountry, countriesList) => {
    const countryElement = document.getElementById('country');
    // Clear previous content
     countryElement.innerHTML = '';
    const country = countriesList.find(country => country.country === selectedCountry);
    if (country) {
    
      const article = document.createElement('article');
  
      // Country Name
      const countryName = document.createElement('h2');
      countryName.textContent = country.country;
      article.appendChild(countryName);
  
      // Capital
      const capital = document.createElement('p');
      capital.textContent = `Capital: ${country.capital}`;
      article.appendChild(capital);
  
      // Money
      const money = document.createElement('p');
      money.textContent = `Currency: ${country.money[0]} (${country.money[1]})`;
      article.appendChild(money);
  
      // Cities
      const cities = document.createElement('p');
      cities.textContent = `Cities fun to go: ${country.cities.join(', ')}`;
      article.appendChild(cities);
  
      // Non-Cities
      /*const nonCities = document.createElement('p');
      nonCities.textContent = `Avoid this cities: ${country.nocities.join(', ')}`;
      article.appendChild(nonCities);*/
  
      // Image
      const image = document.createElement('img');
      image.src = country.image;
      image.alt = `${country.country} Flag`;
      article.appendChild(image);
  
      countryElement.appendChild(article);
    } 
  };


/* reset Function */
function reset(){
    const countryElement = document.querySelector("#country");
    document.querySelector('#cityInput').value = '';
    document.querySelector('#amountUSD').value = '';
    document.querySelector('#result').textContent = '';
    document.querySelector('#USD').textContent = '';
    //clearing the variables
    countryElement.innerHTML = '';
    // Clearing the input fields
    cityInput.value = '';
    amountUSD.value = '';

    // Clearing the result divs
    resultDiv.textContent = '';
    usdDiv.textContent = '';

}


/*Function countryChosen() */
const countryChosen = () =>{

    const selectedCountry= document.getElementById("select").value; 
    
    switch(selectedCountry){
    case 'guate':
        displayCountry('Guatemala', countriesList);
        return "Guatemala";
     
    case'bras':
        displayCountry('Brasil', countriesList);
        return "Brasil";

    case 'chil':
        displayCountry('Chile', countriesList);
        return "Chile";

    case 'arge':
        displayCountry('Argentina', countriesList);
        return "Argentina";

    case 'per':
        displayCountry('Peru', countriesList);
        return "Peru";          
    
    }
    
};

//Funtion searchCity()
const searchCity = () => {
    
    const userInput = document.getElementById('cityInput').value.trim();
    const resultElement = document.getElementById('result');
    //the user write the name of the city
    if (userInput) {
        //Handle the mayuscules
        const formattedUserInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
        const found = countriesList.some(country => 
        country.nocities.some(city => 
        city.toLowerCase() === formattedUserInput.toLowerCase()));
        //display the message if the city is safe or not
        const resultMessage = found
        ? `Avoid visit "${userInput}".`
        : `The city "${userInput}" is safe to visit.`;

      resultElement.textContent = resultMessage;
    } else {
      resultElement.textContent = 'City not found';
    }
  };

  //Function to convert USD to the current money of the elected country
  function convertCurrency() {
    
    const amountUSD = parseFloat(document.getElementById("amountUSD").value);
    const selectedCountry = countryChosen(); // Replace with the country chosen in countryChosen()

    // Find the selected country in the countriesList
    const countryData = countriesList.find(country => country.country === selectedCountry);

    if (countryData) {
      const currency = countryData.money[0];

      const exchangeRate = countryData.money[1];
      

      // Calculate the converted amount
      const convertedAmount = amountUSD * exchangeRate;

      // Display the converted amount
      const resultElement = document.getElementById("USD");
      resultElement.textContent = ` ${amountUSD} USD are ${convertedAmount.toFixed(2)} ${currency}.`;
    }
      
    };
  

 

// Call the function with your countriesList array
searchCity(countriesList);

/* Event Listener */
document.querySelector('#select').addEventListener("change", () => {
countryChosen(countriesList);
});

//Calling the function getTemples()
getCountries();
//displayCountry();