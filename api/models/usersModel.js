'use strict';
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema; 

 var usersSchema = new Schema({}, { strict: false });

 module.exports = mongoose.model('users', usersSchema); 