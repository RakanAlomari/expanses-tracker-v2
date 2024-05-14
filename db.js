const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/backend");

module.exports = mongoose;
