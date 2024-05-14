// User.js
const db = require("../db");

const ins = db.model("ins", {
    name:  String,
    id:  String ,
    password: String,
    a: String
});
module.exports = ins;
