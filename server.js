const express= require('express')
const nunjucks = require('nunjucks')


const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", { //Configurando nunjucks
    express: server
})

server.get("/", function(req, res) { //Renderizando página index
    return res.render("index", {items: recipes})
})

server.get("/about", function(req, res) {//Renderizando página about
    return res.render("about")
})

//server.get("/recipes/:index", function (req,res) {
 //   const receipts = data; //Array de receitas carregado do data.js
  //  const recipeIndex = req.params.index;
   // console.log(receipts[recipeIndex]);
    //return res.render("recipe"), {recipes: data};
//})
server.get("/recipe", function(req, res){
    return res.render("recipe", {items: recipes})
})

server.get("/recipes/:index", function (req,res) {
    const recipeIndex= req.params.index
    const recipe = [...recipes]

    return res.render('recipe', {recipe: recipe[recipeIndex -1]})
})

server.get("/recipes", function(req, res) {//Renderizando página recipes
    return res.render("recipes", {items: recipes})
})

server.listen(2000, function (){
    console.log("server is running")
})