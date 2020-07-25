console.log("It works");
//Plan take the inputs
//create new inputs for the new recipe
//create new input for the steps

const btnAddIngredient = document.querySelector('.add-ingredient');
const btnAddstep = document.querySelector('.add-step');
const btnSubmit = document.querySelector('.submit');
const formSubmit = document.querySelector('form');
const ingredientList = document.querySelector('.ingredient-list');
const stepList = document.querySelector('.step-list');


const handleAddIngredient = e => {
  const myIngredientHtml = `
  <input type="text" name="ingredient" id="ingredients">
  `
  ingredientList.insertAdjacentHTML('beforeend', myIngredientHtml);
}

const handleAddsteps = e => {
  const mystepHtml = `
  <input type="text" name="step" id="step">
  `
  stepList.insertAdjacentHTML('beforeend', mystepHtml);
}

const handleSubmitButton = e => {
  e.preventDefault();
  const form = e.target;
  const title = form.recipe.value;
  const picture = form.recipeImg.value;
  const author = form.cook.value;
  const difficulty = form.difficulty.value;
  const timing = form.duration.value;
  

  const allIngredients = form.querySelectorAll('.ingredients');
  let arrayIng;
  
  Array.from(allIngredients.forEach(element => {
    obj[element.attribute('ingredient')] = element.value;
  }));
  console.log(element);
  const recipes = [
  {
    title: `${title}`,
    picture: `${picture}`,
    author: `${author}`,
    difficulty: `${difficulty}`,
    timing: `${timing}`,
    ingredients: [`${arrayIng}`],
    steps : [],
}
];
console.log(recipes)

  formSubmit.reset();
}

btnAddIngredient.addEventListener('click', handleAddIngredient);
btnAddstep.addEventListener("click", handleAddsteps);
formSubmit.addEventListener('submit', handleSubmitButton);
