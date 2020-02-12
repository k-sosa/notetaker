const db = require("../db/db.json")

let id =1
function apiRoutes(app) {

    app.get('/api/notes', function(req, res){
        res.json(db)
    })

    app.post("/api/notes", function(req, res){

        console.log(req.body)


        req.body.id= id++
         
        db.push(req.body)

        res.json(db)
    })

    app.delete("/api/notes/:id", function(req, res){
         let getId = req.params.id

         console.log(getId)
         db.splice(db.findIndex(item => item.id === getId), 1)
        
        

        res.json(db)
    })
}

module.exports = apiRoutes