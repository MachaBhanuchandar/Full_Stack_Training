const express = require("express");

var app = express();
app.get("/", function (req, res) {
    res.send("hello from express js")
})
app.get("/student", function (req, res) {
    res.send("hello from student")
})
app.listen(5000, function () {
    console.log("server started at 5000")
})