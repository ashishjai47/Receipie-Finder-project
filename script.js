const entryForm = document.querySelector("form");
const valueInputBox = document.querySelector("#input-box");
const searchResult = document.querySelector("#result");

entryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  findRecipe();
});
async function findRecipe() {
  const value = valueInputBox.value.trim();
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
  );
  const data = await response.json();
//   console.log(data);
  displayResult(data.meals)
  displayRequirement(data.meals)
}

function displayResult(items) {
  let innerHTML = "";
  items.forEach((recipe) => {
    innerHTML += `
        <div class="sec-container">
        <div class="heading">
        <h2> ${recipe.strMeal}</h2>
        </div>
        <div class="inner-container">
        <div class="image">
        <span> Origin:${recipe.strArea} </span>
        <a class="full-recipe" href="https://www.themealdb.com/meal/${recipe.idMeal}">
        <img  src="${recipe.strMealThumb}" alt="recipe.strMeal" ></a>
        </div>
        <div class="instruction">
        <p>${recipe.strInstructions}</p>
        </div>
        </div>
        <div class="watch">
        <a href="${recipe.strYoutube}" target="_blank" ><i class='bx bxl-youtube'></i></a>
        </div>
        </div>`;
  });
  searchResult.innerHTML=innerHTML;
}

  function displayRequirement(meals){
    const ingredient=[];
    const measurement=[];
    let  innerHTML1="";
    // let i=1;
    // console.log(meal)
//   for(let str in  meal){
    // let temp1="strIngredient"+i;
    
//     console.log(temp1)
//    if(str.key==temp1){
//     ingredient.push(str[value])
//    }

//    let temp2="strMeasure"+i;
//    if(str.key==temp2){
//     console.log("hello")
//     measurement.push(str[value])
//    }
//    i++;
for(let i=0;i<meals.length;i++){
    // console.log(meals[i]);
    for(let [[index],key,value] of Object.entries(Object.entries(mea[i]))){
        console.log(`${index} = ${key} =${value}`)
        var temp1="strIngredient"+j;
        if(str===temp1){
                // console.log("hello")
            }
            j++;
    }
}
  }