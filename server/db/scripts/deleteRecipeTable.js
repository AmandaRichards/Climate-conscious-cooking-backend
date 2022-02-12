 import query from "../index.js";

 
const dataRecipesDelete =
"DROP TABLE  IF EXISTS  recipes"
  

async function deleteResources() {
  const res = await query(dataRecipesDelete);
}
deleteResources();


