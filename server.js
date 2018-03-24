var express = require('express'),
 app = express(),
 port = process.env.PORT || 3312;
 mongoose = require('mongoose'),
 Task = require('./api/modals/modal'), //created model loading here
 bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Faasos:password@ds123399.mlab.com:23399/faasosdatabase'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route
app.listen(port);
console.log("Faasos application started on port " + port);