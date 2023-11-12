/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Herendira Gomez Herrera";
let currentYear = "2023";

var profilePicture = 'images/yo.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);





/* Step 5 - Array */
const favFood = ["Tamales", " Sushi", " Fish", " Carrot cream"];
foodElement.innerHTML = favFood;
const otherFood = ["Lemon pie", "Guava Atole"];

favFood.push(otherFood);  //agrega
foodElement.innerHTML += `<br>${favFood}`; //imprime

favFood.shift(); //quita el primer elem del arreglo
foodElement.innerHTML += `<br>${favFood}`; //imprime

//const last = favFood[favFood.lenght-1];
//const removelast = favFood.splice(last)
otherFood.pop();
foodElement.innerHTML += `<br>${favFood}`;







