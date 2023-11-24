/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile ={
    name: "Herendira Gomez Herrera",
    photo:"images/yo2.jpg",
    favoriteFoods: ['Chicken soup', 'Chilaquiles', 'Chocoflan','Charros beans'],
    hobbies: ['Play the guitar', "Sewing", 'Knitting'],
    placesLived:[],
};

/* Populate Profile Object with placesLive objects 
/*Using code outside of the myProfile 
definition, add an item to the placesLived 
array where this new item itself is object
with two properties: place and length and 
for each of these properties, 
add appropriate values as strings.*/
myProfile.placesLived.push(
    {
        place: 'Saltillo MX',
        length: '2 years'
    },
    {
        place: 'Bountiful UT',
        length: '3 years'
    },  
    {
        place: 'Levis QC',
        length: '1 years'
    },

    
);

/* DOM Manipulation - Output */
/* Name */

const name = document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;

document.querySelector('#photo').alt = myProfile.name;
   

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);

});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);

});


/* Places Lived DataList */
myProfile.placesLived.forEach(element=> {
    //For place
    let lugar = document.createElement('dt');
    lugar.textContent = element.place;
    document.querySelector('#places-lived').appendChild(lugar);
    //for length
    let time = document.createElement('dd');
    time.textContent = element.length;
    document.querySelector('#places-lived').appendChild(time);

});



