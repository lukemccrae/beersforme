var environment = process.env.NODE_ENV || 'development';
var config = require('./knexfile.js')[environment] //require looks in module exports by default
module.exports = require('knex')(config)
