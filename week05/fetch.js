// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";



let results = null;
//let results2 = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //const response2 = await fetch(urlList);

  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    //const data2 = await response2.json();
    //doStuffList(data2);
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  //console.log("first: ", results);
  const outp = document.querySelector("#output");
  
  const html = `<h2>${results.name}</h2>
                 <img src = "${results.sprites.front_default}" alt ="Image of ${results.name}">`;
  outp.innerHTML = html;
  console.log("first: ", results);


}



function doStuffList(data) {
  console.log(data);  
  const pokeListElement = document.querySelector("#outputList");
  let pokeList = data.results;
  pokeList = sortPokemon(pokeList);

  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;
         // note the += here...
     pokeListElement.innerHTML += html;
  })

}

async function getPokemonList(urlList) {
    const response = await fetch(urlList);
    //const response2 = await fetch(urlList);
  
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
      //const data2 = await response2.json();
      //doStuffList(data2);
      doStuffList(data);
    }
    function compare(a, b) {
        if (a.name > b.name) {
          // sort b before a
          return 1;
        } else if (a.name < b.name) {
          // a and b different but unchanged (already in the correct order)
          return -1;
        } else return 0; // a and b are equal
      }
      
      function sortPokemon(list) {
        let sortedList = list.sort(compare);
        return sortedList;
      }
    getPokemon(url);
    console.log("second: ", results);
    
    getPokemon(urlList);
    //console.log("second: ", results);

}