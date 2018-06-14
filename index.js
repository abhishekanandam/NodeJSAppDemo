var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mroute = require("./mroutes/mroute");
app.use("/mongo-api", mroute);

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen("4700", function(){

    console.log('server is listening to 4700');
});

mongoose.connect('mongodb://localhost/capgemini');

var db= mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', ()=>{
console.log('mongo db connection is open');
});





