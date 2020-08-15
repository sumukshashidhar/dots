// Imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


// Getting ENV vars
require('dotenv').config()

// Initializations
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//routes file
require('./routes')(app);


// starting webserver
app.listen(process.env.PORT||8080, process.env.IP || "0.0.0.0", function (req, res) {
    console.info("Server Started")
})


// connecting to mongoDB
mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true})
    .then(() => console.info("MongoDB Connected"))
    .catch(err => console.error(err));