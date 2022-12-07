var http = require("http");
var express = require("express");
var app = express();
var mongoose = require('mongoose');
var appRoutes = require('./appRoutes');
// var adminRoutes = require('./Routes/AdminRoutes');
var bodyParser = require('body-parser');
var cors = require('cors');


// const { API_PORT } = process.env;
const port = process.env.port || 3001;

mongoose.connect('mongodb://localhost/adminDashboard', {
    useNewUrlParser: true
    , useUnifiedTopology: true
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', appRoutes);
// app.use('admin', adminRoutes);

//TO LISTEN TO SERVER
http.createServer(app).listen(port);
console.log('Server is running on port: ', port);


