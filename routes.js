const recipes = require("./data")
const express = require('express') 
const routes = express.Router()
const admin = require('./admin')

routes.get("/", function(req, res) { //Renderizando página index
    return res.render("index", {items: recipes})
})
routes.get("/about", function(req, res) {//Renderizando página about
    return res.render("about")
})
routes.get("/recipe", function(req, res){
    return res.render("recipe", {items: recipes})
})
routes.get("/recipes/:index", function (req,res) {
    const recipeIndex= req.params.index
    const recipe = [...recipes]

    return res.render('recipe', {recipe: recipe[recipeIndex -1]})
})
routes.get("/recipes", function(req, res) {
    return res.render("recipes", {items: recipes})
})



routes.post("/admin", admin.post)
routes.get("/admin", function(req,res) {
    return res.render('admin/admin')
})


module.exports = routes