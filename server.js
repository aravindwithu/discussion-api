const express = require('express'),
app = express(),
port = process.env.PORT || 8080;
mongoose = require('mongoose'),
comment = require('./api/models/commentModel'),
discussion = require('./api/models/discussionModel'), //created model loading here

// for parsing the body
bodyParser = require('body-parser'),

// for compatible with crose platform
cors = require('cors');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/discussionDB'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const commentRoutes = require('./api/routes/commentRoute'); //importing route
commentRoutes(app); //register the route

const discussionRoutes = require('./api/routes/discussionRoute'); //importing route
discussionRoutes(app); //register the route

app.listen(port);
console.log('Discussion RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
  });
