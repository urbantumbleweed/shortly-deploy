var dotenv = require('dotenv').load();
var app = require('./server-config.js');

// var port = 4568;
// process.env.PORT = process.argv[2] || 4568;

// console.log(process.env.PORT);

app.listen(process.env.PORT);

console.log('Server now listening on port ' + process.env.PORT);
