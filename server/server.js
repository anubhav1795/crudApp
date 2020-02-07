//this file used to collabrate the modules
//already we developed four modules
//@fetch    @insert     @update     @delete
//in order to collabrate above modules, we need main server file i.e server.js file
//node starts the execution from server.js file.

//import express module
let express = require("express");
//import cors module
let cors = require("cors");
//import body-parser module
let bodyparser = require("body-parser");

//create the rest object
let app = express();

//enable the cors
app.use(cors());

//set the JSON as MIME Type
app.use(bodyparser.json());

//read the JSON
app.use(bodyparser.urlencoded({extended:false}));


//use fetch module  (collabrate the fetch module) with url pattern
app.use("/fetch",require("./fetch/fetch"));

//use insert module
app.use("/insert",require("./insert/insert"));

//use update module
app.use("/update",require("./update/update"));

//use delete module
app.use("/delete",require("./delete/delete"));

//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");