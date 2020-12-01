var express = require("express");
var fs = require("fs");
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

require('./routes/requests')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});