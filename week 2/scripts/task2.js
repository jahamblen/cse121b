/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const theNameElement = 'Josh Hamblen';


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = 'Josh Hamblen';

// Step 3: declare and instantiate a variable to hold the current year
let currentyear = new Date().getFullYear();

const currentyearelement = document.getElementById('year');

// Step 4: place the value of the current year variable into the HTML file
currentyearelement.innerHTML = `<strong>${currentyear}`;

// Step 5: declare and instantiate a variable to hold the name of your picture
let photo = "images/me.jpg"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', photo);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favfood = ['Pizza', 'tacos', 'Biscuits and Gravy']



// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = favfood;

// Step 3: declare and instantiate a variable to hold another favorite food
const afood = "grits";

// Step 4: add the variable holding another favorite food to the favorite food array
favfood.push(afood);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = favfood;

// Step 6: remove the first element in the favorite foods array
favfood.shift();
// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favfood;

// Step 8: remove the last element in the favorite foods array
favfood.pop();


// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favfood;




