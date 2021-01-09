const express = require('express')
const bodyParser = require("body-parser")
const ejs = require("ejs")






const app = express()

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/puplic"));



app.get("/", function(req, res) {
    res.render(__dirname + "/views/home.ejs")
})




app.listen(3000, function() {
    console.log("The server is working");
})