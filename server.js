var app = require('./express');
var express = app.express;
var bodyParser = require('body-parser');
app.use(app.express.static(__dirname + '/public'));

require("./Server/app");

app.listen(process.env.PORT || 5000);

