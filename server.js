var express = require("express");


var app = express();
var PORT = process.env.PORT || 3050;
// parses incoming requests with urlencoded payloads 
app.use(express.urlencoded({ extended: true }));
// parses incoming requests with JSON payloads
app.use(express.json());
// to serve static files 
app.use(express.static(__dirname));
//the js file with all the requests 
require('./routes/requests')(app);
//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});