//create the plan
// - Catch the form element to start sbmit the form and easier to get access to all the values in it. such as name attribute an so on.
// - Add an event listener to the form to submit.
// - Catcth the two buttons (add ingrsients and add steps) to add new steps and ingredients.
//Grab the ul element.
// - Create an html from js and append it to the dom when the form is sbmited. The work is done in the event listener function here
// - take the ul const and append the new created  html to it. 

//Look carefully if they (the new input elements) placed in the right order or not.

/* 
Here is the big chalenge: creating the array :
  For the simpler ones: take their values and give them to their key values.
  for the double doutch ones:
  -May be grab the new inputs by event delegation and ask how long they are. I don't know how to create the array here.

*/

//First and the second idea create the htnl for the adding ingredients and steps.
const addIgredient = document.querySelector('.addIngredient');
const ingredientsListElement = document.querySelector('#ingredientsList');
const formElement = document.querySelector('form');

const addIngredientInput = () => {
  const number = ingredientsListElement.children.length + 1;
  const liHtml = `
    <li><input type="text" name="ingredient${number}" value="ingredient ${number}"></li>
  `
  ingredientsListElement.insertAdjacentHTML('beforeend', liHtml);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const {title, picture, author, difficulty, timing} = form;
  const ingredients = [];
  for (let i = 0; i< ingredientsListElement.children.length; i++) {
    ingredients.push(ingredientsListElement.children[i].children[0].value)
  }
  const recipe = [{
    title:timing,
  }]
}

addIgredient.addEventListener('click', addIngredientInput);
formElement.addEventListener('sbmit', handleSubmit);
const generateIngredientInput = () => {
 //Here is the html
 //insertAdjacentHtml
}
//Here is the eventListener(button);

//Third idea generate the recipe object after the submit
//Grab the form and listen for sbmit event
//A get all the info
  //Listen for the form sbmit
  //form.attrName to access single values
  //loop through children of the ul to get dynamic input

//B Put the data inside an object
 //create the object
 // const recipe = [{key:value}]
 //Show the object
 