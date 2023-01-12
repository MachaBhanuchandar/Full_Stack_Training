var mongoose = require("mongoose");
var Schema = mongoose.Schema
var employeeSchema = new Schema({
    name: { type: String },
    email: { type: String },
    mobile: { type: String },
    age: { type: Number }
})
module.exports = mongoose.model('Employee', employeeSchema);