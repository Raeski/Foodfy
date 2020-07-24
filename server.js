const express= require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()


server.use(express.static('public'))
server.set("view engine", "njk")
server.use(routes)


nunjucks.configure("views",{ //Configurando nunjucks
    express: server,
    autoescape:false,
    noCache: true

})


server.listen(2000, function (){
    console.log("server is running")
})