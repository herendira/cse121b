/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
  return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    return document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}
function subtractNumbers(){
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    return document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let multnum1 = Number(document.querySelector('#factor1').value);
    let multnum2 = Number(document.querySelector('#factor2').value);
    return document.querySelector('#product').value = multiply(multnum1, multnum2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value);
    return document.querySelector('#quotient').value = divide(number1, number2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

//assigne every id with variables
const subtotalInput = document.getElementById('subtotal');
const memberCheckbox = document.getElementById('member');
const total = document.getElementById('total');
const getTotalButton = document.getElementById('getTotal');

getTotalButton.addEventListener('click', calculateTotal);

function calculateTotal() {
    const subtotal = parseFloat(subtotalInput.value);

    if (memberCheckbox.checked) {
        const discountedSubtotal = subtotal * 0.85; // Apply 15% discount for club members
        total.textContent = `$ ${discountedSubtotal.toFixed(2)}`; // Display total due with discount
    } else {
        total.textContent = `$ ${subtotal.toFixed(2)}`; // Display original total due
    }
}




/* ARRAY METHODS - Functional Programming */

let numbersArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];


/* Output Source Array */
const numbers= document.querySelector('#array');
numbers.textContent = numbersArr.join(' , ');

/* Output Odds Only Array */

const oddes = document.querySelector('#odds');
oddes.textContent = numbersArr.filter(num => num % 2 !==0).join(' , ');

/* Output Evens Only Array */
const evens = document.querySelector('#evens');
evens.textContent = numbersArr.filter(num => num % 2 ===0).join(' , ');
/* Output Sum of Org. Array */
const sum = document.querySelector('#sumOfArray');
sum.textContent = numbersArr.reduce((total, num) => total + num);

/* Output Multiplied by 2 Array */
const mul = document.querySelector('#multiplied');
mul.textContent = numbersArr.map((x) => x*2);

/* Output Sum of Multiplied by 2 Array */
const sumOfMul = document.querySelector('#sumOfMultiplied');
sumOfMul.textContent = numbersArr.map ((x) =>x*2).reduce((total, num) => total + num);

