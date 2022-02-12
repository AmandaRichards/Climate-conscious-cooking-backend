import query from "../index.js";
import recipes from "../../recipe-data.js"

async function populateDataResources() {
  for (let i = 0; i < recipes.length; i++) {
    const title = recipes[i].title;
    const ingredients = recipes[i].ingredients;
    const method = recipes[i].method;
    const res = await query(
      "INSERT INTO recipes(title, ingredients, method) VALUES ($1, $2, $3) RETURNING *",
      [title, ingredients, method]
    );
    console.log(res);
  }
}

populateDataResources();