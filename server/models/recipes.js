import recipes from "../recipe-data.js";
import query from "../db/index.js";

export async function getRecipes() {
   return recipes;  
}

// GET A RECIPE BY ID
   export async function getRecipeByID(id) {
   const found = recipes.find(function (recipe) {
   return recipe.id === id;
   });
   return found;
};

/*export function getRecipeByTitle(title) {
    const found = recipes.find(function (recipe) {
    return recipe.title === title;
    });
    return found;
 };*/

 export async function getRecipeByTitle(title) {
    const results = recipes.filter((recipe) => {
      if (recipe.title.toLowerCase().includes(title.toLowerCase())) {
        return !!(results);
      }
    });
    let titles = [];
    results.forEach(function(r){
        titles.push(r.title);
    })
    return titles;
}
  

export async  function getRecipeByIngredient(ingredient){
    //let recipes = getRecipes();
    const results = recipes.filter(function(recipe){
        let recipeIngredients = recipe.ingredients
        //console.log(recipeIngredients);
        const found = recipeIngredients.find(function(i){
            return i.indexOf(ingredient) >=0;
        })
        console.log(found);
        /*let found = false;
        for(let i=0; i<recipeIngredients.length; i++){
            if(recipeIngredients[i].indexOf(ingredient) >= 0 ){
                found = true;
                break;
            }
        }*/
        return !!(found);
    });
    console.log(results);
    let titles = [];
    results.forEach(function(r){
        titles.push(r.title);
    })
    return titles;
}
/*recipieIngredients[I].find(I => i.indexOf(ingredient) >=0)*/

/*recipieIngredients[I].find(function(I) { return i.indexOf(ingredient) >=0})*/

export async  function getRecipeByCuisine(cuisine){
    //let recipes = getRecipes();
    const results = recipes.filter(function(recipe){
        let recipeCuisine = recipe.cuisine
        //console.log(recipeIngredients);
        const found = recipeCuisine.find(function(i){
            return i.indexOf(cuisine) >=0;
        })
        console.log(found);
        /*let found = false;
        for(let i=0; i<recipeIngredients.length; i++){
            if(recipeIngredients[i].indexOf(ingredient) >= 0 ){
                found = true;
                break;
            }
        }*/
        return !!(found);
    });
}
// CREATE A RECIPE
   export async function createRecipe(recipe) {
   recipes.push(recipe);
   return recipes[recipes.length -1];
   

};


// UPDATE A RECIPE BY ID
export function updateRecipeByID(id, updates) {
   const foundIndex = recipes.findIndex(function(recipe){
      return recipe.id === id;
   });
   recipes[foundIndex] = updates;
   return recipes[foundIndex];
};

// DELETE A RECIPE BY ID
export function deleteRecipeByID(id) {
   const foundIndex = recipes.findIndex(function(recipe){
      return recipe.id === id;
});
const item = recipes[foundIndex];
recipes.splice(foundIndex, 1);
return item;
};