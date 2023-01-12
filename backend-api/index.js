const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors")
var mongoose = require("mongoose");
var app = express();
const router = express.Router();
var port = 5000
mongoose.connect("mongodb://localhost:27017/emp_curd")
app.use(cors())
var users = require('./routes/users')
var employee = require('./routes/employee')
var jsonParser = bodyParser.json()
app.use(bodyParser.json({ type: 'application/*+json ' }))
app.use("/users", jsonParser, users);
app.use("/employee", jsonParser, employee);
// app.use(function (req, res, next) {
//     console.log("i am calling before routes")
//     next()
// })
// app.get("/", function (req, res) {
//     res.send("hello from express js")
// })
// app.get("/student", function (req, res) {
//     res.send("hello from student")
// })
app.listen(port, function () {
    console.log(`server is running on ${port}`)
})