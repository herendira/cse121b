

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
  // for loop

for (let i=0; i<studentReport.length; i++){
   if (studentReport[i] < 30){
       console.log(studentReport[i])
   }
  
} 
console.log("1");
  // while loop
let i = 0;
while (i< studentReport.lenght){
     
      if (studentReport[i] < LIMIT) {
          console.log(studentReport[i]);
      //continue;
      }
      i++;
      
  }

console.log("2");
// forEach loop
studentReport.forEach(function (item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });
  console.log("3");

  // for...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }
  console.log("4");


  const n = 6; // number of days forward
  // get output location on document to append within list
  const output = document.getElementsByTagName("ul");
  // Intl.DateTimeFormat Options
  const options = { weekday: 'long'}; // vs. short, etc.
  
  // BEGIN
  const today = new Date();
  // TODAY test output
  let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
  document.getElementById('today').innerHTML = `Today is ${todaystring}. `;
  
  // next n days
  for (let i = 1; i <= n; i++ ) {
      let nextday = new Date();
      nextday.setDate(today.getDate() + i);
      let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
      item = document.createElement("li"); // list item
      item.textContent = nextdaystring;
      output[0].appendChild(item);
  }
  
//Call a function named calculate and pass it the arguments to support the console output of the following equation: 2 + 3.

  function calculate(a, b, displayResult) {
    displayResult( a + b);
  }
  
  function displayResult(result) {
    console.log('The result is: ' + result);
  }

 calculate(7,3, displayResult);
  //displayResult(result);