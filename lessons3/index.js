var express = require("express");
var app = express();
// http://localhost:3000/
app.get("/", function (req, res) {
    res.send("Hello world");
});

app.get("/google", function (req, res) {
    res.redirect('https://www.google.com/');

});
app.get("/search/:val", function (req, res) {
    var v = req.params.val;
    res.redirect('https://www.google.com/search?q=' + v);

});
app.get("/*", function (req, res) {
    var v = req.params.val;
    res.send("<h1>error 404</h1>");

});
app.listen(3000, function () {
    console.log("Example is running on port 3000");
});
