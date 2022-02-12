import query from "../index.js";
import recipes from "../../recipe-data.js"

async function populateDataResources() {
  for (let i = 0; i < recipes.length; i++) {
    const title = recipes[i].title;
    const meal_type = recipes[i].mealType;
    const cuisine = recipes[i].cuisine;
    const ingredients = recipes[i].ingredients;
    const method = recipes[i].method;
    const res = await query(
      "INSERT INTO recipes(title, meal_type, cuisine, ingredients, method) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, meal_type, cuisine, ingredients, method]
    );
    console.log(res);
  }
}

populateDataResources();