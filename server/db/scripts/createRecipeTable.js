import query from "../index.js";

const dataRecipes =
  "CREATE TABLE IF NOT EXISTS recipes(id SERIAL PRIMARY KEY, title TEXT, meal_type TEXT, cuisine TEXT, ingredients TEXT, method TEXT );"; //image how to add/what data type?

  async function createRecipesTable() {
  const res = await query(dataRecipes);
}
createRecipesTable();

