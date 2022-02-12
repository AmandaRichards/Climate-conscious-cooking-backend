import express from 'express'
const router = express.Router();

import {createRecipe, getRecipeByIngredient, getRecipeByID, getRecipeByTitle, getRecipes, updateRecipeByID, deleteRecipeByID} from "../models/recipes.js"

//const PORT = 3000;
const app = express();

app.use(express.json());

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get("/", async function(req, res){
  const recipes = await getRecipes();
  res.json({"success": true,
  "payload": recipes });
})

// app.get("/", function (req, res) {
//   res.sendFile(html);
// });

router.get("/recipes", async function (req, res){
  const recipes =  await getRecipes();
  res.json({ "success": true, "payload": recipes});
});

router.get("/recipes/search/:ingredient", async function (req, res){
    const ingredient = req.params.ingredient;
    const byIngredient = await getRecipeByIngredient(ingredient)
    console.log(byIngredient)
    res.json({ "success": true, "payload": byIngredient});
  });

router.get("/recipes/:id", function(req, res) {
  const id = Number(req.params.id);
  console.log(req.params.id);
  res.json({ "success": true, "payload": getRecipeByID(id)})
 } );

 router.get("/recipes/:title", function(req, res) {
    const title = req.params.title;
    console.log(req.params.title);
    res.json({ success: true, payload: getRecipeByTitle(title)})
   } );

router.post("/recipes", function(req, res){
   const newRecipe = req.body;
   //res.json(createRecipe(newRecipe));
  //  const result = recipes.createRecipe(newRecipe)
  //  es.json({ success: true, payload: result

   res.json({ success: true, payload: createRecipe(newRecipe)})
});

router.put("/recipes/:id", function(req, res){
  const id = Number(req.params.id);
  const updatedRecipe = req.body;
   res.json({ success: true, payload: updateRecipeByID(id, updatedRecipe)});
   console.log(recipes);
});

router.delete("/recipes/:id", function(req, res){
  const id = Number(req.params.id);
  res.json({ success: true, payload: deleteRecipeByID(id)})
  console.log(recipes);
 } )


/** END OF YOUR ROUTES */

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

export default router;