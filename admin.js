const fs = require('fs')
const data = require('./data.json')

exports.show = function (req,res) {
  const {id} = req.params

  const foundRecipes = data.recipes.find(function(recipe) {
    return recipe.id == id
  })
  if(!foundRecipes) return res.send("Recipes not found!")

  const recipes = {
    ...foundRecipes,
    //ingredients: foundRecipes.ingredients.split(","),
    create:"",
  }

  return res.render ("admin/show", {recipes})
}
//create
exports.post = function (req, res) {
  // req.query
  // req.body
  const keys = Object.keys(req.body)

  for ( key of keys) {
      if (req.body[key] == "")
          return res.send('Please, fill all fields')
  }

  let {avatar_url, ingredients, create, information} = req.body
  const id = Number(data.recipes.length + 1)
  
  data.recipes.push({
    id,
    avatar_url,
    ingredients,
    create,
    information,
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error")

    return res.redirect("/admin")
  })

}
//update

//delete