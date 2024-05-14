// User.js
const db = require("../db");

const User = db.model("User", {
    name:  String,
    email:  String ,
    phone:   Number , // Corrected to Number instead of int
    username:String ,
    password: String
});
module.exports = User;
