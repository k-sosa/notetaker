const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json())

app.use(express.static("public"))

const port = process.env.PORT || 8080

const apiRoutes = require('./routes/apiRoutes')

apiRoutes(app)

const htmlRoutes = require('./routes/htmlRoutes')

htmlRoutes(app)

app.listen(port, function(){
    console.log('app is listening http://localhost:' + port)
})