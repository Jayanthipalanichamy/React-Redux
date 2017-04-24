var express = require('express');
    path = require('path');

var app = express();
port = 8000;
app.use(express.static(path.join(__dirname, "./")));
app.use("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(port);
console.log("Express server running");