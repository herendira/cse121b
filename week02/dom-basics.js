const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);


const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText="CSE 121b";
newSection.appendChild(newH2);
const newp5 = document.createElement("p5");
newp5.innerText = "Welcome to Javascript Language";
newSection.appendChild(newp5);
document.body.appendChild(newSection);




