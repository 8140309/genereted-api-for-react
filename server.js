var config = require('./config.js');
 var express = require('express'),
	 app = express(),
	 mongoose = require('mongoose'),
	 bodyParser = require('body-parser');

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

 var usersModel = require('./api/models/usersModel');
 var usersRoute = require('./api/routes/usersRoute');
 usersRoute(app);

 mongoose.Promise = global.Promise;
 const connection = mongoose.connect('mongodb+srv://fernando:654321aA@cluster0-sejql.gcp.mongodb.net/db-for-generated-api?retryWrites=true', { useNewUrlParser: true });

 var server = app.listen(config.port, () => {
	 console.log('Listening on ' + server.address().port);
 });

 app.use(function (req, res) {
	 res.status(404).send({ url: req.originalUrl + ' not found' })
 });
