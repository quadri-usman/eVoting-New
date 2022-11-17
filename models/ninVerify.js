var mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

var ninSchema = new mongoose.Schema({
  number: String,
});
ninSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("number", ninSchema);
