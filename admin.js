const fs = require('fs')

//create
exports.post = function (req, res) {
  // req.query
  // req.body
  const keys = Object.keys(req.body)

  for ( key of keys) {
      if (req.body[key] == "")
          return res.send('Please, fill all fields')
  }

  fs.writeFile('data.json', JSON.stringify(req.body), function(){
    if (err) return res.send("Write file error")

    return res.redirect("/admin")
  })

}
//update

//delete